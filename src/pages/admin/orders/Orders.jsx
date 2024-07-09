import axios from "axios"
import { useEffect , useState } from "react"

const Orders = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const fetchOrders=async()=>{
            const {data}=await axios.get(import.meta.env.VITE_SERVER_URL+"/orders");

            setOrders(data)
            console.log(data)
        }
        fetchOrders();
    },[])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // You can customize the format here
      };
      
  return (
    <div>
        <p className="border-b text-xl font-bold border-black text-center mb-2 md:mb-6">Orders to Aprove</p>
        {
            orders?.length===0?<div className="font-semibold text-lg">No orders to approve</div>:
            orders && orders?.map(order=>(
                <div key={order.orderId} className="bg-white p-2 my-2">
                    <div>Order ID: {order.orderId}</div>
                    <div>Order Total: {order.orderQuantity*order.productPrice}$</div>
                    <div>Order Status: {!order.status&&'Not Approved'}</div>
                    <div>Order Address: {order.orderAddress}</div>
                    <div>User Email : {order.email}</div>
                    <div>Product Name: {order.productName}</div>
                    <div>Product Price: {order.productPrice}</div>
                    <div>Product Quantity: {order.orderQuantity}</div>
                    <div>Order Created At: {formatDate(order.orderCreatedAt)}</div>
                    <div className="flex md:flex-row flex-col gap-2">
                        <button className="w-[100%] rounded-md bg-green-500 text-white py-2 hover:bg-green-700 duration-100 active:scale-95">
                            Appove
                        </button>
                        <button className="w-[100%] rounded-md bg-red-500 text-white py-2 hover:bg-red-700 duration-100 active:scale-95">
                            Decline
                        </button>
                    </div>
                </div>
            
            ))
        }
    </div>
  )
}

export default Orders