/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Header from "../components/App/Header";
import Layout from "../components/App/Layout";
import JobForm from "../components/JobForm";
import SearchInput from "../components/SearchInput/SearchInput";

const Post: NextPage = () => {
  return (
    <Layout>
      <Header headerBig={false}></Header>
      <JobForm />
    </Layout>
  );
};

export default Post;
