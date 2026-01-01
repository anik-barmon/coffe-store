import React from "react";
import { Link } from "react-router";

const Signin = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-32">
        <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl divider mt-6 font-bold text-center">
            Login Your Account
          </h2>
          <form onSubmit={handleSignIn} className="card-body">
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="mt-1 text-[13px] text-center">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="link link-hover text-blue-600"
                  href="/auth/login"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
