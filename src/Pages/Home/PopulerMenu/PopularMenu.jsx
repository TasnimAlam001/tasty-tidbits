
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
   
    const popularMenu = menu.filter(item => item.category === "popular")


    return (
        <div>
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"From Our Menu"}

            ></SectionTitle>


            <div className="grid md:grid-cols-2">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }

            </div>
            <button className="btn btn-outline my-5 border-0 border-b-4">View All Menu</button>
 


        </div>
    );
};

export default PopularMenu;