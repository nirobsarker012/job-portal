import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const { title, company } = useLoaderData();
  return (
    <div>
      <h1 className="text-6xl">Job Details of:{title}</h1>
      <p className="">Compnay : {company}</p>
    </div>
  );
};

export default JobDetails;
