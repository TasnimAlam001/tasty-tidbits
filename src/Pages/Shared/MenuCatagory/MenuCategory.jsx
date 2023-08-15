import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items, img, title}) => {
    return (
        <div className="mt-16">
            {

                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}

                    ></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline my-5 border-0 border-b-4">Order Food</button> </Link>
        </div>
    );
};

export default MenuCategory;