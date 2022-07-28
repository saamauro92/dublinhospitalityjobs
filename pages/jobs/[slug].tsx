import { Markup } from "interweave";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Header from "../../components/App/Header";
import SearchInput from "../../components/SearchInput/SearchInput";
import { JobTypes } from "../../types/types";
import { fetchAPI } from "../../utils/utils";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

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
    <>
      <NextSeo
        title={`${job.attributes.title} - Dublin Hospitality Jobs`}
        description=""
        openGraph={{
          title: "Dublin Hospitality Jobs",
          description: "Fresh Dublin Hospitality jobs offers",
          site_name: "Dublin hospitality jobs",
        }}
      />
      <Header headerBig={false}>
        <SearchInput
          jobs={jobs}
          name={name}
          setName={setName}
          foundJobs={foundJobs}
          setFoundJobs={setFoundJobs}
          responsive={true}
        />
      </Header>
      <SearchInput
        jobs={jobs}
        name={name}
        setName={setName}
        foundJobs={foundJobs}
        setFoundJobs={setFoundJobs}
        responsive={false}
      />
      <div className="md:mt-20 sm:mt-20 lg:mx-auto xl:w-6/12 lg:px-2  h-auto pb-20 ">
        <div className="mx-4 flex flex-col  justify-center py-5 gap-4 border-b-2 ">
          <h1 className=" text-xl font-bold text-blue-600 ">
            {job.attributes.title}
          </h1>

          <ReactMarkdown>{job.attributes.description}</ReactMarkdown>

          {job.attributes.howToApply && (
            <h1 className=" text-xl font-bold text-blue-600 capitalize">
              How To Apply
            </h1>
          )}

          <p> {job.attributes.howToApply}</p>
        </div>
      </div>
    </>
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
