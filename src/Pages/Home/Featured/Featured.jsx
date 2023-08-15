import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className="bgImage text-white py-32 bg-fixed my-20">
            <SectionTitle 
            subHeading={"Check It Out"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="md:flex gap-5 w-3/4 mx-auto bg-slate-500 p-8 bg-opacity-60 ">
                <img className="w-[400px]" src={img} alt="" />
                <div className="space-y-3 ">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis perferendis explicabo commodi nulla quas! Odit eum inventore ipsa? Deserunt blanditiis exercitationem quibusdam aperiam nisi commodi vitae illum suscipit soluta.</p>
                    <button className="btn btn-outline ">Read More</button>
                </div>
                
            </div>
            


        </div>
    );
};

export default Featured;