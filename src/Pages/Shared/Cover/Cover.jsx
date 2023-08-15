import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="The Menu"
                strength={-200}
            >
                <div className="hero min-h-screen">
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="hero-overlay max-w-md  bg-opacity-60 p-8 px-10">
                            <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                    </div>
                </div>
            </Parallax>



        </div>
    );
};

export default Cover;