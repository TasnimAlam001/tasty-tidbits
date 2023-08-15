import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";

import menuCoverImg from "../../assets/menu/banner3.jpg"
import dessertCoverImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaCoverImg from "../../assets/menu/pizza-bg.jpg"
import saladCoverImg from "../../assets/menu/salad-bg.jpg"
import soupCoverImg from "../../assets/menu/soup-bg.jpg"

import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../Shared/MenuCatagory/MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Menu = () => {

    const [items] = useMenu();

    const desserts = items.filter(item => item.category === "dessert")
    const pizza = items.filter(item => item.category === "pizza")
    const salad = items.filter(item => item.category === "salad")
    const soup = items.filter(item => item.category === "soup")
    const offered = items.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Tasty Tidbits | Menu</title>
            </Helmet>
            <Cover img={menuCoverImg} title="our Menu"></Cover>
            {/* Offered */}
            <SectionTitle subHeading="Don't Miss" heading="today's offer"></SectionTitle>
            <MenuCategory 
            items={offered}
            ></MenuCategory>

            {/* Desserts */}
            
            <MenuCategory 
            items={desserts}
            title="desserts"
            img={dessertCoverImg}
            ></MenuCategory>

            {/* Pizza */}

            <MenuCategory 
            items={pizza}
            title="pizza"
            img={pizzaCoverImg}
            ></MenuCategory>

            {/* salad */}

            <MenuCategory 
            items={salad}
            title="salad"
            img={saladCoverImg}
            ></MenuCategory>

            {/* soup */}

            <MenuCategory 
            items={soup}
            title="soup"
            img={soupCoverImg}
            ></MenuCategory>

            
        </div>
    );
};

export default Menu;