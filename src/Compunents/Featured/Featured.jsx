import { useEffect, useState } from "react";
import Job from "../job/Job";


const Featured = () => {
    const [jobs, setjobs] = useState ([])

    // 
    const [datalength, setdataLength] = useState(4);

 useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(date => setjobs(date));
 }, [])

    return (
        <div>
           <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4">Featured Jobs</h1>
            <p className="m-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-2 gap-6">
            {
                jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job> )
            }
           </div>
           <div className="text-center mt-8 mb-8">
            <button
             onClick={() =>setdataLength(jobs.length)} className="btn bg-[#7E90FE] justify-center text-slate-950 ">See All Jobs</button>
           </div>
        </div>
    );
};

export default Featured;