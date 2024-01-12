import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../assets/login.jpg";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      // password show and hide
      const [showPassword, setShowPassword] = useState(false);


      const onSubmit = () => {

      }



    return (
        <section className="w-11/12 lg:w-full mx-auto lg:my-20">
      
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-32">
        <div className="w-11/12 lg:w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto mt-10 lg:-mt-20 lg:ml-24">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body lg:px-32 "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Name
                </span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Type Your Name"
                className="input rounded focus:border-[#13ab94]"
              />
            </div>
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Your Photo URL"
                className="input rounded focus:border-[#13ab94]"
              />
            </div>
            {errors.photoURL && (
              <span className="text-red-600">Email is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Type Your Email"
                className="input rounded focus:border-[#13ab94]"
              />
            </div>
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Type Your Password"
                  className="input rounded focus:border-[#13ab94] w-full"
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must contain Uppercase, lower case, number and special
                characters.
              </p>
            )}
            <div className="form-control mt-6">
              <input
                className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#FF9209] to-[#EF4040] border-0 hover:opacity-80"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div className="text-center pb-8">
            <p className="font-medium text-lg -mt-2 mb-4">
              Already have an account  Please{" "}
              <Link to="/login">
                <span className="text-[#EF4040]">Login</span>
              </Link>
            </p>
            <h1>google</h1>
          </div>
        </div>

        <div className="my-10 lg:mt-0 w-full">
          <img
            className="rounded-lg mx-auto drop-shadow-2xl"
            src={login}
            alt=""
          />
        </div>
      </div>
    </section>
    );
};

export default SignUp;