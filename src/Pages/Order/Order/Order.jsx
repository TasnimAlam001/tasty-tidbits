import { useState } from "react";
import coverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts','drinks']   
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [items] = useMenu();

    const desserts = items.filter(item => item.category === "dessert")
    const pizza = items.filter(item => item.category === "pizza")
    const salad = items.filter(item => item.category === "salad")
    const soup = items.filter(item => item.category === "soup")
    const drinks = items.filter(item => item.category === "drinks")


    return (
        <div>
            <Cover img={coverImg} title="Order Food"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-10 text-center">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                    
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                    
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;