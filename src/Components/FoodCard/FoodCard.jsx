

const FoodCard = ({item}) => {
    const {name, image,recipe,price}=item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Foods" /></figure>
            <p className="absolute right-0 mr-5 bg-slate-900 text-white px-3 rounded-lg mt-3">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-200 btn-outline my-5 border-0 border-b-4 border-orange-400">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;