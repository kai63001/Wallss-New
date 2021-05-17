import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));

const Register = () => {
  const submit = (e) => {
    e.preventDefault();
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
            <Input name="name" label="* Name" placeholder="E.g. Jose Singh" />
            <Input
              name="username"
              label="* Username"
              placeholder="E.g. joseSingh"
            />
            <Input
              name="email"
              label="* Email"
              placeholder="E.g. jose@singh.com"
            />
            <Input
              name="password"
              label="* Password"
              placeholder=""
              password={true}
            />
            <div className="mb-2 block">
              <input name="checkbox" className="checked:bg-purple-500" id="checkbox" type="checkbox" />
              <label htmlFor="checkbox" className="ml-2 select-none">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy.
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
