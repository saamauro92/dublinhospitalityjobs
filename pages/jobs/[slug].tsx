import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
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
  console.log("JOB", job);
  return (
    <Layout>
      <Header headerBig={false} />
      <h1>hla</h1>
      <h1 className=" text-md text-blue-500">{job.attributes.title}</h1>

      <p>{job.attributes.description}</p>
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
