import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <div className="divider">Login With Google</div>
            <div className="text-center my-4">
                <button className="btn btn-circle btn-outline">

                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;