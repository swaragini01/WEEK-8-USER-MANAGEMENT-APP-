import React from 'react'

function Footer() {
  return (
    <footer className="py-6 border-t border-slate-200 mt-auto bg-white">
      <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} UserManage. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer