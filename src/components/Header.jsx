import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-1">
      <Link to="/" className="w-52">
        <img src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="sign-in" className="font-bold hover:underline mr-2 tracking-wide">
          <i className="fa fa-user-circle mr-1"></i>
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
