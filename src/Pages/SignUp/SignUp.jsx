import { Link } from "react-router-dom";
import img from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form";



const SignUp = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                            <input type="text" name="name" {...register("name", { required: true , minLength:5, maxLength: 20 })} placeholder="Enter Your Name" className="input input-bordered" />
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
                                minLength:6
                                 })} name="password" placeholder="Enter Password" className="input input-bordered" />
                            
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password have to be more then 6 letters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one Upper case, one special character, one number and a lower case</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-2">Sign Up</button>
                            <Link to="/login"> Already Have an account?  <span className="link link-hover">Go to LogIn</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;