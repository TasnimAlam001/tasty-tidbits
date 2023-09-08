


const MenuItem = ({item}) => {

    const {name, image,recipe,price}=item;
    return (
        <div className="flex mb-4"> 
            <img className="w-[100px] mask mask-hexagon" src={image} alt="" />
            <div className="space-y-1">
                <h2>{name}..............</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600"> {price}</p>
            
            
        </div>
    );
};

export default MenuItem;