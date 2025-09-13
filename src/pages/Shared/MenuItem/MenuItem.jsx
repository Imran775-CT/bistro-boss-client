
const MenuItem = ({item}) => {
    const {name,image, price, recipe } = item;

    return (
        <div className="flex">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[60px] h-[50px] object-cover" src={image} alt="" />
            <div className="flex-col">
                <h3 className="uppercase">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;