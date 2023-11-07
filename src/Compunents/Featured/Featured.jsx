import { useEffect, useState } from "react";
import Job from "../job/Job";


const Featured = () => {
    const [jobs, setjobs] = useState ([])

 useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(date => setjobs(date));
 }, [])

    return (
        <div>
           <div className="text-center">
           <h1 className="text-5xl font-bold">Featured Jobs:{jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className="grid grid-cols-2 gap-6">
            {
                jobs.map(job => <Job key={job.id} job={job}></Job> )
            }
           </div>
        </div>
    );
};

export default Featured;