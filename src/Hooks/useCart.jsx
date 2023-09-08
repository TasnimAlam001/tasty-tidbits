import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";


const useCart = () => {
    const {user,loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart =[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user.email}`)
            return res.data;
        } 
      })

    return [cart, refetch]
};

export default useCart;








































// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProviders";
// import useAxiosSecure from "./useAxiousSecure";


// const useCart = () => {
//     const {user}= useContext(AuthContext);
//     // const token = localStorage.getItem('access-token');
//     const [axiosSecure] = useAxiosSecure();

//     const {refetch, data : cart =[] } = useQuery({
//         queryKey: ['carts', user?.email ],
//         queryFn: async () => {
//             const response = await axiosSecure(`/carts?email=${user?.email}`)
//             return response.data}
//       })
//     //     queryFn: async () => {
//     //         const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{headers: {
//     //             authorization: `bearer ${token}`
//     //         }})
//     //         return response.json()}
//     //   })

//     return [cart,  refetch];
// };

// export default useCart;