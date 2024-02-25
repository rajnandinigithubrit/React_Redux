import Products from "../Products/Products";

const Home = () =>{
    return(
        <>
        <h2 className="heading">welcome to the Redux toolkit store</h2>

        <section>
            <h5>Products</h5>
            <Products/>
        </section>
        </>
    )
}
export default Home;