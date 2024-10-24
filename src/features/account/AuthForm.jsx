import { useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();

  // state for swaping between log in info or register info
  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? "Login" : "Register";
  const altCopy = isLogin
    ? "You dont have an account? Register here."
    : "Already have an account? Login here.";

  const [login, { error: loginError }] = useLoginMutation();
  const [register, { error: registerError }] = useRegisterMutation();

  //controlled state fromt the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (event) => {
    event.preventDefault();

    const logOrReg = isLogin ? login : register;
    const credentials = { username: email, password };

    try {
      await logOrReg(credentials).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main>
      <h1>{authAction}</h1>
      <form onSubmit={handleAuth}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
        </label>
        <button>{authAction}</button>
      </form>
      <a href="#" onClick={() => setIsLogin(!isLogin)}>
        {altCopy}
      </a>
    </main>
  );
}
