import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-fade-in">
      <div className="w-24 h-24 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-5xl mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        U
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight text-slate-800">
        Welcome to UserManage
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
        A modern, robust, and minimalist platform to manage your users. Built with React, Tailwind CSS, and a powerful Node.js backend.
      </p>
      <div className="flex gap-4 pt-4">
        <Link to="/users-list" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm transition-all transform hover:-translate-y-1">
          View Users
        </Link>
        <Link to="/add-user" className="px-8 py-4 bg-white hover:bg-slate-50 text-emerald-700 font-bold rounded-xl border border-emerald-200 shadow-sm transition-all transform hover:-translate-y-1">
          Add New User
        </Link>
      </div>
    </div>
  )
}

export default Home