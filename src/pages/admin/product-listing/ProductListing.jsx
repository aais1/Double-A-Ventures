import React, { useState } from 'react';

const ProductListing = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    });

    const handleInputChange = (e) => {
        //for file input
        if(e.target.name === 'image') {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.files[0],
            });
            return;
        }

        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value,
        });
        
    };

    const handleAddProduct = () => {
        console.log(newProduct)
        //make the req
        setNewProduct({
            name: '',
            price: '',
            description: '',
            image: '',
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Product Listing</h1>

            <div className="mb-4">
                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Price:</label>
                <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-2">Description:</label>
                <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw] min-h-[200px]"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Image:</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    accept='image/*'
                    className="border border-gray-300 px-4 py-2 rounded w-[80vw] md:w-[50vw]"
                />
            </div>

            <button
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded "
            >
                Add Product
            </button>

            {newProduct.image && (
                <div className="mb-4">
                    <label className="block mb-2">Image Preview:</label>
                    <img
                        src={URL.createObjectURL(newProduct.image)}
                        alt="Product Image Preview"
                        className="w-[200px] h-[200px] object-cover"
                    />
                </div>
            )}

            {/* <h2 className="text-xl font-bold mt-8">Product List</h2> */}
            {/* <ul>
                {products.map((product, index) => (
                    <li key={index} className="mb-4">
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