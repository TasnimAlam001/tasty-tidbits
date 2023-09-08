import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Admin !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleDelete = user => {
        console.log(user);
        //TODO : delete kor
    }

    return (
        <div className="">

            <SectionTitle subHeading="Hurry Up" heading="Manage All Users"></SectionTitle>

            <div className="card bg-base-100 shadow-xl w-full md:w-5/6 mx-auto z-10">
                <div className="card-body">
                    <div className="card-title uppercase">

                        <p>Total Users: {users?.length}</p>


                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="overflow-x-auto  w-full pt-7">
                            <table className="table g">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white font-bold">
                                    <tr className="">
                                        <th>#
                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) => <tr key={user._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                {user.name}

                                            </td>
                                            <td>{user.email}</td>
                                            <th>
                                                {
                                                    user.role === 'admin' ? "Admin" :
                                                        <div  className="tooltip" data-tip="Make an Admin ?">
                                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-400 text-white"><FaUserShield></FaUserShield> </button>
                                                        </div>
                                                }
                                            </th>
                                            <th>
                                                <button onClick={() => handleDelete(user)} className="btn bg-red-700 text-white"><FaTrashAlt></FaTrashAlt> </button>
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

export default AllUsers;