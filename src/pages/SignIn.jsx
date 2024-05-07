import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../store/authSlice";
import Button from "../components/Button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userLogin({ email, password, stayLoggedIn }));

    navigate("/user");
  };

  return (
    <section className="mx-auto mt-12 w-[300px] bg-white p-8">
      <i className="fa fa-user-circle block text-center"></i>
      <h1 className="my-5 text-center text-2xl font-bold">Sign In</h1>
      {error && (
        <div className="mb-4 rounded-sm bg-red-200 py-2 text-center text-sm font-semibold text-red-800">
          Incorrect email or password.
        </div>
      )}

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
          <input
            onChange={() => setStayLoggedIn(!stayLoggedIn)}
            checked={stayLoggedIn}
            name="stayLoggedIn"
            type="checkbox"
            id="remember-me"
          />
          <label className="ml-1" htmlFor="remember-me">
            Remember me
          </label>
        </div>

        <Button disabled={loading} type="large">
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </section>
  );
}

export default SignIn;
