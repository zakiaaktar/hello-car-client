import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";



const Login = () => {




  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
  }

    
    return (
        <section className="w-11/12 lg:w-full mx-auto lg:my-20">
      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-32">
        <div className="w-full text-center">
          <img
            className="rounded-lg mx-auto drop-shadow-2xl"
            src={login}
            alt=""
          />
        </div>
        <div className="w-11/12 lg:w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto mt-10 lg:-mt-16 -ml-18">
          <form
            onSubmit={handleLogin}
            className="card-body lg:px-32 pt-12 lg:pt-32 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email"
                className="input rounded focus:border-[#13ab94]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Type Your Password"
                  className="input rounded focus:border-[#13ab94] w-full"
                  required
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#FF9209] to-[#EF4040] border-0 hover:opacity-80"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="mt-4 text-center pb-12">
            <p className="font-medium text-lg mb-4">
              New in Hello Car ? Please{" "}
              <Link to="/signup">
                <span className="text-[#EF4040] font-bold"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Login;