import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, image,recipe,price}=item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    

    const handleAddToCart = cartItem =>{
        const {name, image, price, _id,category}=cartItem;
        console.log(cartItem)
        if(user && user.email){
            const orderItem = {menuItemId: _id, name, image, price, category, email:user.email}
            console.log(orderItem);
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully added to the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })


                }
            })
        }
        else{
            Swal.fire({
                title: 'OPPSS!!',
                text: "You have to Login first to add to cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Let`s Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Foods" /></figure>
            <p className="absolute right-0 mr-5 bg-slate-900 text-white px-3 rounded-lg mt-3">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)} className="btn bg-slate-200 btn-outline my-5 border-0 border-b-4 border-orange-400">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;