import { Link, useLocation } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/authSlice";
import { emptyStorages } from "../utils/helpers";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);

  function handleSignOut() {
    emptyStorages();
    dispatch(signOut());
  }

  return (
    <header className="flex items-center justify-between px-5 py-1">
      <Link to="/" className="w-52">
        <img src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {location.pathname === "/profile" ? (
        <div>
          <Link to="#" className="mr-3 font-bold tracking-wide hover:underline">
            <i className="fa fa-user-circle mr-1"></i>
            {firstName}
          </Link>
          <Link
            onClick={handleSignOut}
            to="/"
            className="mr-2 font-bold tracking-wide hover:underline"
          >
            <i className="fa fa-sign-out mr-1"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to={token ? "/profile" : "/login"}
            className="mr-2 font-bold tracking-wide hover:underline"
          >
            <i className="fa fa-user-circle mr-1"></i>
            {token ? firstName : "Sign in"}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
