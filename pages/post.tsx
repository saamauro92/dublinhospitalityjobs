/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/App/Header";
import JobForm from "../components/JobForm";
import SearchInput from "../components/SearchInput/SearchInput";

import { NextSeo } from "next-seo";
const Post = () => {
  const [name, setName] = useState("");

  return (
    <>
      <NextSeo
        title="Post a Job  - Dublin Hospitality Jobs"
        description=""
        openGraph={{
          title: "Dublin Hospitality Jobs",
          description: "Fresh Dublin Hospitality jobs offers",
          site_name: "Dublin hospitality jobs",
        }}
      />
      <Header headerBig={false}>
        <SearchInput name={name} setName={setName} responsive={true} />
      </Header>

      <SearchInput name={name} setName={setName} responsive={false} />

      <JobForm />
    </>
  );
};

export default Post;
