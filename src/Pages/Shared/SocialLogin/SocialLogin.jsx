import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSocialLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log("LoggedInuSer", loggedInUser);

                const newUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "user" }
                fetch(`http://localhost:5000/users`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Logged In',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    })

            })
            .then(error => console.log(error))
    }


    return (
        <div>
            <div className="divider">Login With Google</div>
            <div className="text-center my-4">
                <button onClick={handleSocialLogin} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;