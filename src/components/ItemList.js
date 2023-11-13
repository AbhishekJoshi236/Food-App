import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 flex justify-between border-gray-400 border-b-2 text-left">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-medium">{item.card.info.name}</span>
                            <p className="text-sm"> ₹{item.card.info.price / 100}</p>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    {/* <div className="w-3/12 p-4 ">
                        <div className="relative border">
                            <button className="p-2  bg-black text-white shadow-lg rounded-lg">Add + </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="Food Picture" className="rounded-lg"/>
                    </div> */}
                    <div className="w-3/12 p-4 relative">
                        <img src={CDN_URL + item.card.info.imageId} alt="Food Picture" className="rounded-lg" />
                        <div className="absolute bottom-[0px] left-0 right-0 flex justify-center">
                            <button className="px-2 p-[3px] bg-black text-white shadow-lg rounded-lg text-sm font-semibold">Add +</button>
                        </div>
                    </div>

                </div>
            ))
            }
        </div>
    )
}

export default ItemList;