import React, { useState, useEffect } from 'react'
import { add, remove } from '../../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProduct } from '../../store/productSlice'
import { STATUS } from '../../store/productSlice'

function Products() {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {data:products,status} = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(fetchProduct());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data)
        //     setProducts(data)
        // }
        // fetchProducts();

    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
        navigate('/cart')
    }

    if(status === STATUS.LOADING){
        return <h2>Loading.....</h2>
    }
    if(status === STATUS.ERROR){
        return <h2>Something went wrong</h2>
    }

    return (
        <div className="productsWrapper">
            {/* {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))} */}
            {Object.values(products).map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                    <button onClick={() => handleAdd(item)} className="btn">
                        Add to cart
                    </button>
                    {/* Other item details */}
                </div>
            ))}
        </div>
    )
}

export default Products
