import React, { useState } from 'react';
import { Upload } from '../../../components/admin';
import axios from 'axios';

const ProductListing = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        category: '',
        description: '',
        images: [],
    });

    const handleInputChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
        console.log(newProduct)
    };
    

    const handleAddProduct = async() => {

        //make the req
        const resp=await axios.post(import.meta.env.VITE_SERVER_URL+'/products', newProduct);
        console.log(resp.data);
        setNewProduct({
            name: '',
            price: '',
            quantity: '',
            category: '',
            description: '',
            images: [],
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-2">Product Listing</h1>

            <div className="mb-2">
                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <div className="mb-2">
                <label className="block mb-2">Price:</label>
                <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <div className="mb-2">
                <label className="block mb-2">Description:</label>
                <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw] min-h-[200px]"
                ></textarea>
            </div>

            <div className="mb-2">
                <label htmlFor="category" className="block mb-2">Category:</label>
                <select name="category" value={newProduct.category} id="category" onChange={handleInputChange}>
                    <option value="1">Electronics</option>
                    <option value="2" selected={true}>Clothing</option>
                    <option value="3">Books</option>
                    <option value="4">Home & Kitchen</option>
                    <option value="5">Beauty & Personal Care</option>
                    <option value="6">Sports & Outdoors</option>
                    <option value="7">Toys & Games</option>
                    <option value="8">Health & Wellness</option>
                    <option value="9">Automotive</option>
                    <option value="10">Jewelry & Accessories</option>
                </select>
            </div>

            <div className="mb-2">
                <label htmlFor="quantity" className="block mb-2">Quantity:</label>
                <input
                    type="text"
                    name="quantity"
                    value={newProduct.quantity}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <Upload setNewProduct={setNewProduct} newProduct={newProduct}/>

            
            <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded "
            >
                Add Product
            </button>

            {/* <h2 className="text-xl font-bold mt-8">Product List</h2> */}
            {/* <ul>
                {products.map((product, index) => (
                    <li key={index} className="mb-2">
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductListing;