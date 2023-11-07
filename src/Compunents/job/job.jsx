import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className="card card-compact w-96 bg-neutral-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-slate-950 font-bold">{job_title}</h2>
          <h2 className="text-slate-950 font-bold">{company_name}</h2>
          <div className="">
           <Link className="bg-neutral-200 p-2 rounded-lg font-bold mr-4">{remote_or_onsite}</Link>
           <Link className="bg-neutral-200 p-2 rounded-lg font-bold ml-4">{job_type}</Link>
          </div>

          <div className="flex">
            <h2 className="flex mr-4"><img src={'https://i.ibb.co/4TdvK22/location2.png'} alt="" />
            <p className="text-slate-950 font-bold">{location}</p></h2>

            <p className="text-slate-950 font-bold flex"><img src={'https://i.ibb.co/6PVvw4Y/money.png '} alt="" />Salary: {salary}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary ">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;