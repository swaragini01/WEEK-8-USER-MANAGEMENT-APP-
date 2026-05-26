import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import API from "../utils/api";

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();

  //form submit
  const onUserCreate = async (newUser) => {
    setError(null);
    setLoading(true);

    try {
      const payload = { ...newUser };
      if (payload.mobileNumber === "") {
        delete payload.mobileNumber;
      } else if (payload.mobileNumber) {
        payload.mobileNumber = Number(payload.mobileNumber);
      }

      await API.post("/users", payload);
      navigate("/users-list");
    } catch (err) {
      setError(err.response?.data || { message: "Unable to create user" });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-emerald-600 text-3xl mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-3xl mt-10">{error.message}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center">Add New User</h1>
        <form onSubmit={handleSubmit(onUserCreate)} className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder-slate-400"
              placeholder="Full Name"
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder-slate-400"
              placeholder="Email Address"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="date"
              {...register("dateOfBirth", { required: "Date of birth is required" })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder-slate-400"
            />
            {errors.dateOfBirth && <p className="mt-2 text-sm text-red-500">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <input
              type="number"
              {...register("mobileNumber")}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder-slate-400"
              placeholder="Mobile Number (Optional)"
            />
          </div>
          <button type="submit" className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-sm">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
