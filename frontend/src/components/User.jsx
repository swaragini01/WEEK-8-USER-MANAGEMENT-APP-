import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import API from "../utils/api";

function User() {
  let { id } = useParams();
  let { state } = useLocation();
  let [user, setUser] = useState(state?.user || null);
  let [loading, setLoading] = useState(!state?.user);
  let [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      return;
    }

    async function getUser() {
      try {
        let res = await API.get(`/users/${id}`);
        setUser(res.data.payload);
      } catch (err) {
        setError(err.response?.data || { message: "Unable to load user" });
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [id, user]);

  if (loading) {
    return <p className="text-center text-emerald-600 text-3xl mt-10">Loading user...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-3xl mt-10">{error.message}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white border border-slate-200 shadow-sm p-10 rounded-3xl relative overflow-hidden">
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-4xl font-bold text-emerald-700">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">{user?.name}</h1>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200">Active User</span>
            </div>
          </div>
          
          <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Address</p>
                <p className="text-slate-800">{user?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Date of Birth</p>
                <p className="text-slate-800">{user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A"}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Mobile Number</p>
                <p className="text-slate-800">{user?.mobileNumber || "Not Provided"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
