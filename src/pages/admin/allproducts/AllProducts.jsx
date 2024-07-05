import axios from "axios";

const AllProducts = () => {
    const fetchData=async()=>{
        try {
            const {data}=await axios.get(import.meta.env.VITE_SERVER_URL+"/products");
        } catch (error) {
            alert(error.message)
        }
    }
    fetchData();
    
    const data=[
        {
            id:1,
            name:'Lorem Ipsum Istratum',
            price:100,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum est rerum omnis quasi explicabo similique eum doloribus quo necessitatibus exercitationem laboriosam nemo, porro illo ut voluptate minus ad quaerat.',
            images:['https://via.placeholder.com/150','https://via.placeholder.com/150','https://via.placeholder.com/150']
        },{
            id:2,
            name:'Lorem Ipsum Istratum',
            price:100,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum est rerum omnis quasi explicabo similique eum doloribus quo necessitatibus exercitationem laboriosam nemo, porro illo ut voluptate minus ad quaerat.',
            images:['https://via.placeholder.com/150','https://via.placeholder.com/150','https://via.placeholder.com/150']
        }
    ]

    return (
        <div>
            {/* <table className="w-[100%] text-left">
                <tr>
                    <th>Name</th>
                    <th className="px-2">Price</th>
                    <th>Description</th>
                    <th>Images</th>
                </tr>
                {data.map((product) => (
                    <tr key={product.id}>
                        <td className="align-top font-semibold">{product.name}</td>
                        <td className="align-top font-semibold px-2">{product.price}</td>
                        <td className="max-w-[200px] align-top text-gray-700">{product.description}</td>
                        <td className="flex flex-wrap gap-2 ">{
                                product.images?.map(image=>(
                                    <img key={product.id} src={image} alt={product.name} className="w-20 h-20"/>
                                ))
                            }
                        </td>
                    </tr>
                ))}
            </table> */}
            <div>
                <div className="flex flex-col gap-4">
                    {data.map((product,index) => (
                        <div key={product.id} className="border border-gray-200 bg-white rounded-md p-1 md:p-4">
                            <div className="flex flex-col gap-3 ">
                                <div>
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-700">{product.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-lg font-semibold">${product.price}</p>
                                        <div className="space-x-2">
                                            <button className="bg-blue-500 hover:bg-blue-800 duration-150 text-white px-4 py-1 rounded">Delete</button>
                                            <button className="bg-green-500 hover:bg-green-800 duration-150 text-white px-4 py-1 rounded">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-wrap">
                                    {
                                    product.images?.map(image=>(
                                        <img key={product.id} src={image} alt={product.name} className="object-cover m-2"/>
                                    ))
                                    }
                                </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllProducts

