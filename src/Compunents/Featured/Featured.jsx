import { useEffect, useState } from "react";


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
           <div>
            {
                jobs.map(job =>  )
            }
           </div>
        </div>
    );
};

export default Featured;