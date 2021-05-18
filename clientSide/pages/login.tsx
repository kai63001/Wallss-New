import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
import { useState } from "react";
import {useRouter} from 'next/router';
import Link from "next/link";
import axios from "axios";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const Login = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const router = useRouter()

  const onHanndleChangeValidate = (e) => {
    const { name } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const inputValidate = (body) => {
    let errorTag = {}
    let isValid = true;
    if(!body.username){
      isValid = false
      errorTag["username"] = "Username is required";
    }

    if(!body.password){
      isValid = false
      errorTag["password"] = "Password is required";
    }
    setErrors(errorTag)
    return isValid
  }

  const loginSystem = async (e) => {
    let errorTag = {}
    e.preventDefault()
    setLoading(true);
    const body = {
      username : e.target.username.value,
      password : e.target.password.value,
    }
    if(!inputValidate(body)) return
    const data = await axios.post(`${process.env.HOST}/login`,body)
    console.log(data)
    if(!data.data.jwt){
      errorTag["username"] = "Username or Password is invalid"
      errorTag["password"] = "Username or Password is invalid"
      setErrors(errorTag)
      setLoading(false)
      return
    }
    cookies.set('token',data.data.jwt);
    router.push('/profile')
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
              name="username"
              label="Your email or username"
              placeholder="example@winters.com"
              error={errors["username"]}
              onChange={onHanndleChangeValidate}
            />
            <Input name="password" label="Password" placeholder="password" error={errors["password"]} onChange={onHanndleChangeValidate} password />
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
