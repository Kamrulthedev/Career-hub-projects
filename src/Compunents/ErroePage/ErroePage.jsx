import { Link } from "react-router-dom";


const ErroePage = () => {
    return (
        <div>
           <div className="text-5xl font-bold text-center mt-48"> 
           <h1 className="mb-8">Opps !!</h1>
            <h1 className="mb-8">404</h1>
            <p>Not Result</p>
           </div>
          <div className=" btn bg-violet-500 flex justify-center text-white font-bold rounded-xl mt-8">
          <Link to={'/'}><button>GO TO HOME</button></Link>
          </div>
        </div>
        
    );
};

export default ErroePage;