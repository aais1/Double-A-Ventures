import axios from "axios"
import { useEffect , useState } from "react"

const Orders = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const fetchOrders=async()=>{
            const {data}=axios.get(import.meta.VITE_SERVER_URL+"/orders");
            console.log(data)
        }
        fetchOrders();
    })
  return (
    <div>
        <p className="border-b text-xl font-bold border-black text-center mb-2 md:mb-6">Orders to Aprove</p>
        {
            orders.length===0?<div className="font-semibold text-lg">No orders to approve</div>:
            orders.map(order=>(
                <div key={order.id} className="bg-white p-2 my-2">
                    <div>Order ID: {order.id}</div>
                    <div>Order Date: {order.date}</div>
                    <div>Order Total: {order.total}</div>
                    <div>Order Status: {order.status}</div>
                </div>
            
            ))
        }
    </div>
  )
}

export default Orders