import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateUserProf = () => {
  const { profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    console.log(name, email);
    profileUpdate(name, image).then(() => {
      toast.success("Profile Updated");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
    const user = {email}
    fetch("http://localhost:5000/users",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
  };
  return (
    <div>
      <div className="flex justify-center mt-20 px-8">
        <form onSubmit={handleUpdateUserProfile} className="max-w-2xl">
          <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">
            Account settings:
          </h2>
          <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <div className="flex flex-col gap-2 w-full border-gray-400">
              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  User name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="text-gray-600 dark:text-gray-400">
                  Photo Url
                </label>
                <input
                  type="text"
                  name="image"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
};

export default UpdateUserProf;
