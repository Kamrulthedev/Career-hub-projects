import { useEffect, useState } from "react";
import Carted from "../Carted/Carted";


const Category = () => {

    const [Carts, setCart] = useState ([]);


    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data => setCart(data))
    },[])


    return (
        <div>
            <div className="text-center ">
            <h1 className="text-5xl font-bold mt-16">Job Category List</h1>
            <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                Carts.map(Cart => <Carted key={Cart.id} Cart={Cart}></Carted>)
                }
            </div>
        </div>
    );
};

export default Category;