import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

  const jobs = useLoaderData ();
    const {id} = useParams();
    const idInt = parseInt(id);
   const job = jobs.find(job => job.id === idInt); 
    console.log(job);

    return (
        <div>
            <h2>Job Details</h2>
            <div className="grid md:grid-cols-4">
              <div className="border md:col-span"></div>
            </div>
        </div>
    );
};

export default JobDetails;