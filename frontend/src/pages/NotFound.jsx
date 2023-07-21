import { Link } from "react-router-dom";
import notfound from "../assets/notfound.png";

export default function NotFound() {
  return (
    <div className="errorContainer">
      <Link to="/">
        <img className="errorImg" src={notfound} alt="notfound" />
      </Link>
      <a href="http://www.freepik.com" className="creditImg">
        Image designed by stories / Freepik
      </a>
    </div>
  );
}
