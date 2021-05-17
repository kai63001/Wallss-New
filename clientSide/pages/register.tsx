import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));
import { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({});

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
    console.log(e.target.name.value);

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
    }else{
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(e.target.email.value).toLowerCase()) == false){
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
      errorser["checkbox"] = "You must read and agree to the Terms of Service to continue";
    }

    setErrors(errorser);
    return formIsValid;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!inputValidate(e)) return;

    console.log(e.target.checkbox.checked);
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
                {errors["checkbox"] && (<div className="text-sm text-red-500">{errors["checkbox"]}</div>)}
              </label>
            </div>
            <input
              className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white py-2 px-5 cursor-pointer"
              value="Create account"
              type="submit"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
