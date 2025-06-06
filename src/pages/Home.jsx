import React, { Suspense } from "react";
import Banner from "../components/Banner";
import HotJobs from "../components/HotJobs";

const jobPromise = fetch(`http://localhost:3000/jobs`).then(res=>res.json());
const Home = () => {
  return <>
  <Banner/>
  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
    <HotJobs jobPromise = {jobPromise}/>
  </Suspense>
  </>
  ;
};

export default Home;
