import { NextPage } from "next";

const Login: NextPage = () => {
  const handleSubmission = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="box-content flex flex-col items-center justify-center w-1/2 p-10 mx-auto mt-12 border border-gray-200 rounded shadow-sm lg:w-3/12 bg-light-100">
      <h1 className="mb-8 font-serif text-2xl font-bold md:text-4xl text-primary-100">Bolder</h1>

      <form onSubmit={handleSubmission} className="flex flex-col items-center justify-center w-full">
        <input className="w-full h-16 pl-2 mb-8 bg-transparent border border-gray-200 rounded outline-none" type="text" placeholder="Email" />
        <input className="w-full h-16 pl-2 mb-8 bg-transparent border border-gray-200 rounded outline-none" type="password" placeholder="Password" />
        <button className="w-full h-10 text-sm font-medium text-white rounded shadow-lg md:text-base bg-aqua-100" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
