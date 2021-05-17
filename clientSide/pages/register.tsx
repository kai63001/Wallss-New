import dynamic from "next/dynamic";
const Layout = dynamic(import("@/components/Layout"));
const Input = dynamic(import("@/components/core/Input"));

const Register = () => {
  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.romeo.value);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-14 px-2 sm:px-0">
        <div className="bg-white p-11 shadow-md">
          <h1 className="text-2xl font-romeo2">Create an Account</h1>
          Join the community.Share the things you create, or share the things
          you love
          <br />
          <br />
          <form onSubmit={submit}>
            <Input
              name="name"
              label="* Name"
              placeholder="E.g. Jose Singh"
            />
            <Input
              name="username"
              label="* Username"
              placeholder="E.g. joseSingh"
            />
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
