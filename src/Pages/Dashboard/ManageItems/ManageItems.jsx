import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiousSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


    const handleDelete = item => {
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
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
        <div>
            <SectionTitle subHeading="Hurry Up" heading="Manage All Items"></SectionTitle>

            <div className="card bg-base-100 shadow-xl w-full md:w-5/6 mx-auto z-10">
                <div className="card-body">
                    <div className="card-title uppercase">

                        <p>Total Item: {menu?.length}</p>


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
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.map((item, index) => <tr key={item._id}>
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
                                                <button className="btn bg-orange-500 text-white"><FaEdit></FaEdit> </button>
                                            </th>
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

export default ManageItems;