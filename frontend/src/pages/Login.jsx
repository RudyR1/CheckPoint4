import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserExport from "../context/UserContext";

export default function Login() {
  const { setUsers, setToken } = useContext(UserExport.UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setMsg] = useState("");
  const [setisLoggedIn] = useState(false);

  const navigate = useNavigate();

  const getUser = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Veuillez renseigner vos identifiants");
    }
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        console.info(res);
        if (res.data.currentuser.role_id === 2) {
          setUsers(res.data.currentuser);
          setToken(res.data.token);
          setTimeout(() => {
            navigate("/admin");
          }, 500);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 500);
        }
        setisLoggedIn(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="MainLogin">
      <h1>Connexion</h1>
      <form onSubmit={getUser}>
        <label htmlFor="name">Identifiant</label>
        <input
          type="email"
          id="email"
          placeholder="email@exemple.com"
          onChange={(event) => {
            const input = event.target;
            setEmail(input.value);
          }}
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          onChange={(event) => {
            const input = event.target;
            setPassword(input.value);
          }}
        />

        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
}
