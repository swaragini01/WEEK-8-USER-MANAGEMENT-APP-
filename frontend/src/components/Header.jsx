import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between px-10 items-center bg-white/80 backdrop-blur-md py-4 border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-sm">
          U
        </div>
        <span className="text-2xl font-bold text-emerald-800 tracking-tight">
          UserManage
        </span>
      </div>
      <ul className="flex gap-2 text-lg font-medium">
        <li>
          <NavLink to="" className={({ isActive }) => (isActive ? "bg-emerald-100 text-emerald-800 rounded-lg px-4 py-2 transition-all font-semibold" : "text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg px-4 py-2 transition-all")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) => (isActive ? "bg-emerald-100 text-emerald-800 rounded-lg px-4 py-2 transition-all font-semibold" : "text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg px-4 py-2 transition-all")}
          >
            Add User
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) => (isActive ? "bg-emerald-100 text-emerald-800 rounded-lg px-4 py-2 transition-all font-semibold" : "text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg px-4 py-2 transition-all")}
          >
            Users List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;