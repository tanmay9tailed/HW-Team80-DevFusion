import React, { useState } from "react";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      navigate("/board");
    } catch (error) {
      toast.error("User doesn't exist / Invalid credentials", {
        position: "bottom-center",
      });
      console.log(error.message);
    }
    setLoading(false);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      navigate("/board");
      await sendEmailVerification(auth.currentUser);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
    setLoading(false);
  };

  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result);
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          });
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          navigate("/board");
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
        });
        console.log(error);
      });
    setLoading(false);
  };

  const githubLogin = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log(result);
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          });
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          navigate("/board");
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
        });
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#4345c2] to-[#252e4a]">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="relative w-full max-w-[900px] min-h-[500px] bg-white rounded-[30px] shadow-lg overflow-hidden transition-transform">
        {/* Login and Signup Forms */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#fcfcfc] px-10 transition-opacity duration-500 ease-in-out transform ${
            isActive ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
          style={{ width: "50%", height: "100%" }}
        >
          <form onSubmit={handleLogin}>
            <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
            <div className="flex space-x-3 my-5">
              <button
                type="button"
                onClick={googleLogin}
                className="flex items-center justify-center w-10 h-10 border rounded-full text-gray-700 hover:bg-gray-100"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                onClick={githubLogin}
                className="flex items-center justify-center w-10 h-10 border rounded-full text-gray-700 hover:bg-gray-100"
              >
                <FaGithub />
              </button>
            </div>
            <span className="text-sm mb-3">or use your registered email and password</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              required
            />
            <button className="bg-blue-600 text-white uppercase text-sm font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-black transition-colors duration-300">
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-[#fcfcfc] px-10 transition-opacity duration-500 ease-in-out transform ${
            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ width: "50%", height: "100%", left: "50%" }}
        >
          <form onSubmit={handleSignup}>
            <h1 className="text-3xl font-semibold mb-4">Create Account</h1>
            <span className="text-sm mb-3">or use your email for registration</span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              required
            />
            <button className="bg-blue-600 text-white uppercase text-sm font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-black transition-colors duration-300">
            {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform transform duration-500 ease-in-out ${
            isActive ? "translate-x-[-101%] rounded-r-[200px]" : "rounded-l-[200px]"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white flex flex-col items-center justify-center px-8 text-center transition-transform transform ${
              isActive ? "translate-x-[100%]" : "translate-x-[0%]"
            }`}
            style={{ height: "100%" }}
          >
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-6">Enter your personal details to use all of site features</p>
            <button
              onClick={() => setIsActive(true)}
              className="bg-transparent border border-white text-white uppercase text-sm font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
            >
              Sign Up
            </button>
          </div>

          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white flex flex-col items-center justify-center px-8 text-center transition-transform transform ${
              isActive ? "translate-x-[0]" : "translate-x-[-100%]"
            }`}
            style={{ height: "100%" }}
          >
            <h1 className="text-3xl font-bold mb-4">Hello, User!</h1>
            <p className="mb-6">Register with your personal details to use all of site features</p>
            <button
              onClick={() => setIsActive(false)}
              className=" bg-transparent border border-white text-white uppercase text-sm font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
