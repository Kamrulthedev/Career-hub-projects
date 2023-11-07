

const Carted = ({Cart}) => {
    const {logo, category_name, availability} = Cart;
    return (
        <div className="card bg-blue-100 shadow-xl mt-8 mb-20">
        <figure><img className="mt-4" src={logo} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-slate-950">{category_name}</h2>
          <p>{availability}</p>
          
        </div>
      </div>
    );
};

export default Carted;