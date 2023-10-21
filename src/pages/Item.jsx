
// eslint-disable-next-line react/prop-types
const Item = ({ item }) => {
    console.log(item);
    return (
        <div className="border border-gray-300 rounded-sm w-56 h-56 flex justify-center items-center">
            <div className="flex flex-col">
                <img src={item?.links?.mission_patch} className="w-14 h-14" alt="" />
                <h4>{item?.launch_date_utc}</h4>
                <h1>{item?.mission_name}</h1>
                <h4>{item?.rocket?.rocket_name}</h4>
                <h2>Launch Status</h2>
                <button>{item?.launch_success === false ? "Failed" : "Success"}</button>
            </div>

        </div>
    );
};

export default Item;