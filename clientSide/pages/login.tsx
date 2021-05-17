import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const loginSystem = (e) => {
    e.preventDefault()
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
        <div className="bg-white sm:p-11 p-5 shadow-md">
          <h1 className="text-3xl font-romeo2">Sign In</h1>
          <span className="text-lg mt-1 block">
            Welcome back to the community
          </span>
          <br />
          <form onSubmit={loginSystem}>
            <Input
              name="username "
              label="Your email or username"
              placeholder="jose@singh.com"
            />
            <Input name="password" label="Password" placeholder="password" password />
            <button
              className="flex bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white py-2 px-5 cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              <span>Sign in</span>
            </button>
          </form>
          <br />
          <div className="flex justify-between">
            <Link href="/forgotpwd">
              <a className="text-purple-600">Forgot password?</a>
            </Link>
            <Link href="/register">
              <a className="text-purple-600">Create account</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
