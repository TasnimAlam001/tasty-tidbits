import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaListUl, FaPhoneAlt, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";


const Dashboard = () => {

    const option = <>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] md:text-2xl z-20">
            {/* Sidebar content here */}
            <h1 className="font-bold text-black text-3xl my-5 text-center pb-14">Tasty Tidbits</h1>





            <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
            <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>


            <div className="divider"></div>
            

            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to="/menu"><FaListUl></FaListUl>Menu</NavLink></li>
            <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag>Shop</NavLink></li>
            <li><NavLink to="/menu"><FaPhoneAlt></FaPhoneAlt> Contact</NavLink></li>


        </ul>

    </>

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side z-100 z-20">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                {option}

            </div>
            <div className="drawer-side hidden lg:block z-20">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                {option}

            </div>
            <div className="drawer-content flex flex-col ">
                {/* Navbar */}
                <div className="w-full navbar lg:hidden bg-[#D1A054]">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <h1 className="font-bold text-black text-3xl m-auto text-center">Tasty Tidbits</h1>

                </div>

                {/* Page content here */}
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;