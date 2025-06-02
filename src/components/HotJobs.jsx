import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({jobPromise}) => {
    const jobs = use(jobPromise);
    return (
        <div>
            <h2 className='text-center text-2xl md:text-4xl lg:text-5xl'>Jobs of the day</h2>
            <p className="text-center text-xl my-3.5">Search and connect with the right candidates faster.</p>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3.5 container'>
            {
                jobs.map(job=><JobCard key={Math.random()} job={job}/>)
            }
           </div>
        </div>
    );
};

export default HotJobs;