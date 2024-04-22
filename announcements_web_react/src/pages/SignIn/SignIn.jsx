import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import Img from "../../img/log_in.jpg";

function SignIn({ onLogin }) {
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const jsonData = JSON.stringify(formObject);

    const response = await fetch("http://127.0.0.1:8051/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      alert(errorMessage.message);
      return;
    }
    const data = await response.json();
    onLogin(data.user_id);
    navigate("/");
  };

  return (
    <>
      <div class="block"></div>
      <div class="form_container">
        <form id="login-form" onSubmit={onSubmit}>
          <h2 class="form_title">Log In</h2>
          <label for="fname">User name</label>
          <input type="text" id="fname" name="username" />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
          <input type="submit" value="Log In" />
        </form>
        <img src={Img} class="registration-img" />
      </div>
      <span class="spring">➿</span>
      <span class="message"></span>
      <span class="lock">🔒</span>
    </>
  );
}

export default SignIn;
