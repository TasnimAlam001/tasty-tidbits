import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const SignUp = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext)

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("loggedUser:", loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const newUser = { name: data.name, email: data.email, role: "user" }
                        fetch(`http://localhost:5000/users`, {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(newUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    logOut()
                                        .then(() => { })
                                        .then(error => console.log(error))
                                    navigate("/login")
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Successfully Signed up, Please Login for further process.',
                                        showConfirmButton: true,

                                    })


                                }
                            })

                    })
                    .then(error => console.log(error))
            })

    };

    return (
        <div className="hero min-h-screen bg-base-200 pt-40 md:pt-10">
            <div className="hero-content flex-col md:flex-row-reverse ">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold md:pl-20">Sign Up !</h1>
                    <img className="py-6 " src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" {...register("name", { required: true, minLength: 5, maxLength: 20 })} placeholder="Enter Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" {...register("photoURL", { required: true })} placeholder="Enter Your Photo" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select {...register("gender")} className="select select-bordered w-full max-w-xs">
                                <option disabled selected value="female" placeholder="Gender"></option>
                                <option disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="male">Female</option>
                                <option value="other">Other</option>
                            </select>

                            {errors.gender && <span className="text-red-600">Gender is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                minLength: 6
                            })} name="password" placeholder="Enter Password" className="input input-bordered" />

                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password have to be more then 6 letters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Upper case, one special character, one number and a lower case</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary mb-2" type="submit" value="Sign Up" />

                            <Link to="/login"> Already Have an account?  <span className="link link-hover">Go to LogIn</span></Link>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;