import { Link } from "react-router";
import { AuthContest } from "../contests/AuthContest";
import { useContext } from "react";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(AuthContest);
  // console.log(createUser);

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );
    // const name = formData.get("name");
    // const photoURL = formData.get("photoURL");
    // const email = formData.get("email");
    // const password = formData.get("password");
    console.log(email, password, userProfile);
    //create user in firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //save user profile info to database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User profile saved:", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-32">
        <div className="card py-5 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl divider mt-6 font-bold text-center">
            Signup Your Account
          </h2>

          <form onSubmit={handleSignup} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
              />
              {/* Photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Enter Photo URL"
              />
              {/* Address */}
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input"
                placeholder="Enter Your Address"
                required
              />
              {/* phone */}
              <label className="label">Phone</label>
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="Enter Your Phone"
                required
              />

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
              <button className="btn btn-neutral mt-4">Signup</button>
              <p className="mt-1 text-[13px] text-center">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
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

export default Signup;
