import React from 'react'

const AdminSideBar = () => {
  return (
    <aside className="bg-gray-800 sticky top-0 h-screen ">
      <header className="px-4 py-3">
        <div className="text-white text-xl font-semibold">AdminSidebar</div>
      </header>
      <nav className="px-4 py-3">
        <a href="#" className="block mt-4 text-white hover:text-gray-300">Link 1</a>
        <a href="#" className="block mt-4 text-white hover:text-gray-300">Link 2</a>
        <a href="#" className="block mt-4 text-white hover:text-gray-300">Link 3</a>
      </nav>
    </aside>
  )
}

export default AdminSideBar