/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Layout from "../components/App/Layout";
import JobForm from "../components/JobForm";

const Post: NextPage = () => {
  return (
    <Layout>
      <JobForm />
    </Layout>
  );
};

export default Post;
