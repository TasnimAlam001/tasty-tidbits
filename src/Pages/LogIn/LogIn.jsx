import { useContext, useEffect, useRef, useState } from "react";
import img from "../../assets/others/authentication2.png"
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const LogIn = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(3);
    }, [])

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value, false) == true) {
            setDisabled(false)
        }

        else {

            setDisabled(true)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200 pt-40 md:pt-10">
            <div className="hero-content flex-col md:flex-row ">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold md:pl-20">Login now!</h1>
                    <img className="py-6 " src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onChange={handleValidateCaptcha} type="text" ref={captchaRef} placeholder="Type The Captcha" className="input input-bordered" />


                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary mb-2">Login</button>
                            <Link to="/signUp"> New Here?  <span className="link link-hover">Go to SignUp</span></Link>
                        </div>
                    </form>
                   
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default LogIn;