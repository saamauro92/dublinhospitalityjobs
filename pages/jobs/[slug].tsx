import { Markup } from "interweave";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Header from "../../components/App/Header";
import Layout from "../../components/App/Layout";
import SearchInput from "../../components/SearchInput/SearchInput";
import { JobTypes } from "../../types/types";
import { fetchAPI } from "../utils/utils";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  [key: string]: object;
  job: JobTypes;
  jobs: JobTypes[];
};

const Post = ({ job, jobs }: Props): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);
  const [name, setName] = useState("");
  const [foundJobs, setFoundJobs] = useState(jobs);

  useEffect(() => {
    /*  this sorts markup intervewave issue at rehydrate*/
    setHasMounted(true);
  }, []);

  return (
    <Layout>
      <Header headerBig={false}>
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
        />
      </Header>
      <div className="md:mt-20 mt-10 lg:mt-20 lg:mx-auto xl:w-6/12 lg:px-2  h-screen mb-20 ">
        <div className="mx-4 flex flex-col  justify-center py-5  border-b-2 ">
          <h1>hla</h1>
          <h1 className=" text-md text-blue-500">{job.attributes.title}</h1>

          {hasMounted && (
            <Markup
              noHtml={false}
              className="overflow-hidden   max-h-24"
              content={job.attributes.description}
            />
          )}
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
      jobs: jobs.data,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const jobs = await fetchAPI("/jobs", { field: ["slug"] });

  const paths = jobs.data.map((job: JobTypes) => ({
    params: {
      slug: job.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
