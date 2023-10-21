import { useItems } from "../context/ItemContext";
import Item from "./Item";

const Items = () => {
    const { results } = useItems()
    console.log(results);
    console.log('Hey');
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
                <div className="border border-black p-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            results.map((item) => (
                                <Item
                                    key={item.flight_number}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;