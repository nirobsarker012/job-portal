import React from "react";
import Banner from "../components/Banner";
import HotJobs from "../components/HotJobs";

const jobPromise = fetch(`http://localhost:3000/jobs`).then(res=>res.json());
const Home = () => {
  return <>
  <Banner/>
  <HotJobs jobPromise = {jobPromise}/>
  </>
  ;
};

export default Home;
