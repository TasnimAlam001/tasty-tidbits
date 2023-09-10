import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AddItem = () => {
    return (
        <div className="mb-36">
            <SectionTitle subHeading="Hurry Up" heading="Add An Item"></SectionTitle>
            <div className="w-5/6 mx-auto bg-slate-100 p-5">
                <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>

                        </label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered w-full" />

                    </div>
                    <div className="lg:flex gap-6 w-full">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>

                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>

                            </select>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="number" placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <div><input type="file" className="file-input file-input-bordered my-3 w-full max-w-xs" /></div>
                    <input className="btn bg-[#D1A054] text-white" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;