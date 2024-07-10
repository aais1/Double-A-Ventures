import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_SERVER_URL + "/products");
            setProducts(data);
            console.log(data)
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    const handleDelete = async (id) => {
        if(!window.confirm('Are you sure you want to delete this product?')){
            return;
        }
        try {
            const { data } = await axios.delete(import.meta.env.VITE_SERVER_URL + "/products/" + id);
            setProducts(products.filter(product => product.id !== id));
            toast.success(data.message);
        } catch (error) {
            toast.error('Please try to clear all pending order for this product first');
        }
    };

    const handleEdit = async (id) => {
        // Handle edit logic here
    };

    return (
        <div>
            <div>
                <div className="flex flex-col gap-4">
                    {
                        products.length === 0 ? <p className="font-semibold text-lg">No products found,Add some :)</p> :
                        products.map((product) => (
                        <div key={product.id} className="border border-gray-200 bg-white rounded-md p-1 md:p-4">
                            <div className="flex flex-col gap-3 ">
                                <div>
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-700">{product.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-lg font-semibold">${product.price}</p>
                                        <div className="space-x-2">
                                            <button className="bg-blue-500 hover:bg-blue-800 duration-150 text-white px-4 py-1 rounded"
                                                onClick={() => handleDelete(product.id)}>Delete</button>
                                            <button className="bg-green-500 hover:bg-green-800 duration-150 text-white px-4 py-1 rounded"
                                                onClick={() => handleEdit(product.id)}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-wrap">
                                    {
                                        product.images?.map((image, index) => (
                                        <img key={index} src={image} alt={product.name} className="object-cover w-52 h-52 m-2" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
