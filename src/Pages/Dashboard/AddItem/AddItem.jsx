import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";


const img_hosting_token= import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const [axiosSecure]= useAxiosSecure();


    const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image',data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {name, price, category, recipe}=data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgUrl};
                console.log(newItem);

                axiosSecure.post('/menu', newItem)
                .then(data=>{
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${name} Inserted Successfully !`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    console.log(".......",data.data)
                })

            }
           
        })
        
        console.log(data)
    }
    console.log(img_hosting_token)
    return (
        <div className="mb-36">
            <SectionTitle subHeading="Hurry Up" heading="Add An Item"></SectionTitle>
            <div className="w-5/6 mx-auto bg-slate-100 p-5">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>

                        </label>
                        <input type="text" placeholder="Recipe Name" {...register('name', { required: true })} className="input input-bordered w-full" />
                        {errors.name && <p className="text-red-500">Recipe Name is required.</p>}

                    </div>
                    <div className="lg:flex gap-6 w-full">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>

                            </label>
                            <select defaultValue="Pick One" {...register('category', { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option> 
                                <option>dessert</option>
                                <option>drinks</option>

                            </select>
                            {errors.category && <p className="text-red-500">Category is required.</p>}

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="number" {...register('price', { required: true })} placeholder="Price" className="input input-bordered w-full " />
                            {errors.price && <p className="text-red-500">Recipe Name is required.</p>}

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>

                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        {errors.recipe && <p className="text-red-500">Recipe details is required.</p>}

                    </div>
                    <div><input type="file" {...register('image', { required: true })} className="file-input file-input-bordered my-3 w-full max-w-xs" />
                        {errors.image && <p className="text-red-500">Recipe Name is required.</p>}
                    </div>
                    <input className="btn bg-[#D1A054] text-white" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;