import React, {useState} from "react";
import Spinner from './Spinner'
import useFetch from './services/UseFetch'
import {useParams} from "react-router-dom"
import PageNotFound from "./PageNotFound";
import {Link} from "react-router-dom"

export default function Products() {
    const [size, setSize] = useState(""); //this is our first hook- refer to react-notes(129) for more info
    const {category} = useParams()
    const { data: products, loading, error } = useFetch(
        "products?category=" + category 
    );

    // useEffect(() => {
    //   async function init() {
    //     getProducts("shoes") //centeralized functions - way to handle api calls react-notes(176)
    //       .then((response) => setProducts(response))
    //       .catch((e) => setError(e))
    //       .finally(() => setLoading(false));
    //   }
    //   init();
    // }, [])
    //this is list of reasons that useEffect should re-run . It's an array of dependancies.
    //[] says run this once


    function renderProduct(p) {
        return (
            <div key={p.id} className="product">
                <Link to={`/${category}/${p.id}`}>
                    <img src={`/images/${p.image}`} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p>${p.price}</p>
                </Link>
            </div>
        );
    };


    const filteredProducts = size
        ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
        : products; 
  
    if (error) throw error; //in development, the error stack displays over the error boundary 
    if (loading) return <Spinner />
    if(products.length === 0) return <PageNotFound />
    
    return  (//refer synthentic events in react-notes(142) If you forget what properties are available on event, set a debugger and inspect the event. 
        <>
            <section id="filters">
                <label htmlFor="size">Filter by Size:</label>{" "}
                <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="">All sizes</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                {size && <h2>Found {filteredProducts.length} items </h2>}
            </section>
            <section id="products">{filteredProducts.map(renderProduct)}</section>
    </>
    );
};

//when does react render? react-notes(160)
//To fetch data from a API we can use the useEffect hook, runs after each render.
//UseEffect is like a configurable lifecycle method 
