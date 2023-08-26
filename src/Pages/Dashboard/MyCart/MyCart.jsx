import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";


const MyCart = () => {
    //TODO: Helmet
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div className="">
            <Link to="/order/salad"><SectionTitle subHeading="My Cart" heading="Wanna Add More?"></SectionTitle></Link>


            <div className="card bg-base-100 shadow-xl w-full md:w-5/6 mx-auto z-10">
                <div className="card-body">
                    <div className="card-title uppercase">

                        <p>Total Item: {cart?.length}</p>
                        <p>Total Price: ${total}</p>
                        <button className="btn btn-warning">PAY</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="overflow-x-auto  w-full pt-7">
                            <table className="table g">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white font-bold">
                                    <tr className="">
                                        <th>
                                        </th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item, index) => <tr key={item._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.image} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                {item.name}

                                            </td>
                                            <td>{item.price}</td> 
                                            <th>
                                                <button className="btn bg-red-700 text-white"><FaTrashAlt></FaTrashAlt> </button>
                                            </th>
                                        </tr>)
                                    }


                                </tbody>


                            </table>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default MyCart;