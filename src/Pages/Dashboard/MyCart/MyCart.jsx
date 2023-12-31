import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    //TODO: Helmet
    const [cart , refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item) => {
        Swal.fire({
            title: `Are you sure, You want to DELETE ${item.name}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item.name} file has been deleted.`,
                                'success'
                            )

                        }
                    })

            }
        })
    }

    return (
        <div className="">
            <Link to="/order/salad"><SectionTitle subHeading="My Cart" heading="Wanna Add More?"></SectionTitle></Link>


            <div className="card bg-base-100 shadow-xl w-full md:w-5/6 mx-auto z-10">
                <div className="card-body">
                    <div className="card-title uppercase">

                        <p>Total Item: {cart?.length}</p>
                        <p>Total Price: ${total}</p>
                        <Link to="/dashboard/payment"><button className="btn btn-warning">PAY</button></Link>
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
                                                <button onClick={() => handleDelete(item)} className="btn bg-red-700 text-white"><FaTrashAlt></FaTrashAlt> </button>
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