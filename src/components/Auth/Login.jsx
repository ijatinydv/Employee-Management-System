import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen w-screen bg-black">
        <div className="border-2 border-emerald-600 p-10 pt-4 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl mb-5 font-bold">Login</h1>
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center gap-6"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-2 border-emerald-600 rounded-full px-3 py-2 outline-none bg-transparent text-white placeholder:text-gray-600 text-xl"
            />
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="border-1 border-emerald-600 rounded-full px-3 py-2 outline-none bg-transparent text-white placeholder:text-gray-600 text-xl"
            />
            <button
              className="bg-emerald-600 rounded-full text-white px-5 py-2 font-semibold text-lg cursor-pointer border-none"
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
