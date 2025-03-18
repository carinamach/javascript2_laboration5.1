import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import{fetchSingelProducts} from './data/ProductData'
export const SingleProduct = () =>{

    const [product, setProduct] = useState({})
    let {id} = useParams();
    useEffect(() => {
        const fetchData = async ( ) => {
            const result = await fetchSingelProducts(id)
            setProduct(result)
        }
        fetchData ()
    },[])

    return(
        <>
        <h1> {product.title}</h1>
        <div className="productgallery_card">
        <div className="productgallery_card_container">
            <img src={product.image} alt="image for product" className="hero-image"/>
            <div className="information">

                <div className="name">{product.title}</div>

                <div className="store">{product.category}</div>

                <a href="#" className="storebutton">Purchase Product</a>

            </div>
        </div>
    </div>
        </>
    )
}