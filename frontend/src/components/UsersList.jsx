import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import API from "../utils/api";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        setError(null);
        let res = await API.get("/users");
        setUsers(res.data.payload);
      } catch (err) {
        setError(err.response?.data || { message: "Unable to load users" });
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  //go to user
  const gotoUser = (userObj) => {
    navigate(`/user/${userObj._id}`, { state: { user: userObj } });
  };

  if (loading) {
    return <p className="text-center text-emerald-600 text-3xl mt-10">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-3xl mt-10">{error.message}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800">Users Directory</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((userObj) => (
          <div key={userObj.email} onClick={() => gotoUser(userObj)} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                {userObj.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">{userObj.name}</h2>
            <p className="text-slate-500 flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              {userObj.email}
            </p>
          </div>
        ))}
      </div>
      {users?.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 border-dashed">
          <p className="text-slate-500 text-xl mb-4">No users found</p>
        </div>
      )}
    </div>
  );
}

export default UsersList;
