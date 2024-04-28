import { useState } from "react";
import Button from "../components/Button";
import { userLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  }

  return (
    <section className="mx-auto mt-12 w-[300px] bg-white p-8">
      <i className="fa fa-user-circle block text-center"></i>
      <h1 className="my-5 text-center text-2xl font-bold">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="font-bold" htmlFor="username">
            Email
          </label>
          <input
            className="w-full rounded-sm border border-black p-[5px] text-xl leading-5"
            type="text"
            id="username"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-sm border border-black p-[5px] text-xl leading-5"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input type="checkbox" id="remember-me" />
          <label className="ml-1" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <Button type="large">Sign In</Button>
      </form>
    </section>
  );
}

export default SignIn;
