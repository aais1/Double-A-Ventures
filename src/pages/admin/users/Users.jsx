import React, { useEffect } from 'react';
import axios from 'axios'
const Users = () => {
    const [users,setUsers]=React.useState([]);

     const handleDelete=async(id)=>{
        try {
            console.log('try')
            const {data}=await axios.delete('http://localhost:3000/user/'+id);
            setUsers(users.filter((user)=>user.id!==id))
        } catch (error) {
            console.log(error)
        }
     }
     

     useEffect(()=>{
        
    const fetchData=async()=>{
        try {
            const {data}=await axios.get('http://localhost:3000/user/getusers');
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    };

     fetchData();
     },[])
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className='text-left'>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    { users.length>0 ?
                        users?.map((user) => (
                        <tr key={user.id} className="text-left space-y-2">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name || 'Ali' }</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">{user.phone || '03123456789'}</td>
                            <button className='border hover:bg-red-500 hover:text-white active:scale-[0.90] duration-75 border-red-500 font-semibold rounded-md text-red-500 p-2' onClick={()=>handleDelete(user.id)}>Delete Users</button>
                        </tr>
                    ))
                    :<tr><td className='p-3 font-bold text-2xl text-red-500' >No Users</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;