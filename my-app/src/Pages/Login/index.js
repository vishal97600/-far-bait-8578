import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = (props) => {
  const { className } = props;
  let navigation = useNavigate();
  const handleLogin = () => {
    navigation("/women");
  };
  return (
    <div className="login-page">
      <form class="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
