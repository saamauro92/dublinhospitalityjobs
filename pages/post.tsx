/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/App/Header";
import JobForm from "../components/JobForm";
import SearchInput from "../components/SearchInput/SearchInput";
import { JobTypes } from "../types/types";

const Post = () => {
  const [name, setName] = useState("");

  return (
    <>
      <Header headerBig={false}>
        <SearchInput name={name} setName={setName} responsive={true} />
      </Header>

      <SearchInput name={name} setName={setName} responsive={false} />

      <JobForm />
    </>
  );
};

export default Post;
