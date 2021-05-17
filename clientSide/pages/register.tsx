import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
import { useState } from "react";
import axios from "axios";
import {useRouter } from 'next/router'
import Link from 'next/link'

const Register = () => {
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

  const inputValidate = (e) => {
    let formIsValid = true;
    let errorser = {};
    if (e.target.name.value.length <= 0) {
      formIsValid = false;
      errorser["name"] = "Name is required";
    }
    if (e.target.username.value.length <= 0) {
      formIsValid = false;
      errorser["username"] = "Username is invalid";
    }
    if (e.target.email.value.length <= 0) {
      formIsValid = false;
      errorser["email"] = "Email is required";
    } else {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(e.target.email.value).toLowerCase()) == false) {
        formIsValid = false;
        errorser["email"] = "Email is invalid";
      }
    }
    if (e.target.password.value.length <= 0) {
      formIsValid = false;
      errorser["password"] = "Password is required";
    }
    if (!e.target.checkbox.checked) {
      formIsValid = false;
      errorser["checkbox"] =
        "You must read and agree to the Terms of Service to continue";
    }
    setErrors(errorser);
    return formIsValid;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!inputValidate(e)) return;
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      name: e.target.name.value,
    };
    setLoading(true);
    const data = await axios.post(`${process.env.HOST}/register`, body);
    if (data.data.status == "username already exit!!") {
      const errorser = {};
      setLoading(false);
      errorser["username"] = "Username already exists";
      setErrors(errorser);
      return
    }
    if(data.data.status == "success"){
      router.push('/login')
    }
    console.log(data);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
        <div className="bg-white sm:p-11 p-5 shadow-md">
          <h1 className="text-3xl font-romeo2">Create an Account</h1>
          <span className="text-lg mt-1 block">
            Join the community.Share the things you create, or share the things
            you love
          </span>
          <br />
          <form onSubmit={submit}>
            <Input
              name="name"
              label="* Name"
              placeholder="E.g. Jose Singh"
              onChange={onHanndleChangeValidate}
              error={errors["name"]}
            />
            <Input
              name="username"
              label="* Username"
              placeholder="E.g. joseSingh"
              error={errors["username"]}
              onChange={onHanndleChangeValidate}
            />
            <Input
              name="email"
              label="* Email"
              placeholder="E.g. jose@singh.com"
              error={errors["email"]}
              onChange={onHanndleChangeValidate}
            />
            <Input
              name="password"
              label="* Password"
              placeholder=""
              password={true}
              error={errors["password"]}
              onChange={onHanndleChangeValidate}
            />
            <div className="mb-2 block">
              <input
                name="checkbox"
                className="checked:bg-purple-500"
                id="checkbox"
                type="checkbox"
                onChange={onHanndleChangeValidate}
              />
              <label htmlFor="checkbox" className="ml-2 select-none">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy.
                {errors["checkbox"] && (
                  <div className="text-sm text-red-500">
                    {errors["checkbox"]}
                  </div>
                )}
              </label>
            </div>
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
              <span>Create account</span>
            </button>
          </form>
          <br />
          <span>Already have an account? <Link href="/login"><a className="text-purple-600">Sign in</a></Link></span>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Register;
