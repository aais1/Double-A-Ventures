import React from 'react';

const Users = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
        { id: 3, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 4, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
        { id: 5, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 6, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
        { id: 7, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 8, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
        { id: 9, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 10, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
        { id: 11, name: 'John Doe', email: 'john@example.com' , phone:"0312345678"},
        { id: 12, name: 'Jane Smith', email: 'jane@example.com' , phone:"0312345678" },
    ];

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
                    {users.map((user) => (
                        <tr key={user.id} className='text-left'>
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;