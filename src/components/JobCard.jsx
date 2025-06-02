import React from "react";
import { Link } from "react-router";
import { IoLocation } from "react-icons/io5";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="card bg-base-100 max-w-[400px] shadow-sm">
      <div className="flex justify-around items-center">
        <figure>
          <img src={job.company_logo} alt="Shoes" />
        </figure>
        {/* Company name */}
        <div className="flex flex-col">
          <h3>{job.company}</h3>
          <span className="inline-flex items-center gap-1">
            <IoLocation />
            {job.location}
          </span>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {job.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="">
          Salary: {job?.salaryRange.min} - {job?.salaryRange.max} BDT
        </p>
        <p>{job?.description}</p>
        <div className="card-actions justify-end">
          {job?.requirements?.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`${job._id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
