import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../store/cartSlice";
const Cart = () => {
    const items = useSelector(state => state.cart)
    const item = JSON.stringify(items);
    const distpatch = useDispatch()
    console.log(item)

    const handleBtn = (productId) =>{
        distpatch(remove(productId))
    }
    return (
        <>
            <h1>Cart</h1>
            <div className="catrWrapper">
                {
                    items.map(product => (
                        <div className="cartCard">
                            <img src={product.image} />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className="btn" onClick={() => handleBtn(product.id)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart
