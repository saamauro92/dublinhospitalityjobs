import { Markup } from "interweave";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Header from "../../components/App/Header";
import Layout from "../../components/App/Layout";
import { JobTypes } from "../../types/types";
import { fetchAPI } from "../../utils";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  [key: string]: object;
  job: JobTypes;
};

const Post = ({ job }: Props): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    /*  this sorts markup intervewave issue at rehydrate*/
    setHasMounted(true);
  }, []);

  return (
    <Layout>
      <Header headerBig={false} />
      <div className="lg:mt-1 lg:mx-auto xl:w-6/12 lg:px-2  h-screen mb-20 ">
        <div className="mx-4 flex flex-col  justify-center py-5 ">
          <h1 className="font-semibold text-xl my-2 capitalize cursor-pointer text-blue-600">
            {job.attributes.title}
          </h1>

          <Markup
            noHtml={false}
            className="overflow-hidden   max-h-24"
            content={job.attributes.description}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params as IParams;

  const jobs = await fetchAPI("/jobs", {
    filters: {
      slug: slug,
    },
    populate: "*",
  });

  return {
    props: {
      job: jobs.data[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await fetchAPI("/jobs", { field: ["slug"] });

  return {
    paths: jobs.data.map((jobs: JobTypes) => ({
      params: {
        slug: jobs.attributes.slug,
      },
    })),
    fallback: false,
  };
};
