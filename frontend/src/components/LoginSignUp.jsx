import "./LoginSignUp.css";

function LoginSignup() {
  return (
    <div className="LoginSignup">
      <a href="0">
        <img
          className="SignUp"
          src="../src/components/NavBarLastPage/sign up.png"
          alt="Signup"
        />
        <img
          className="Login"
          src="../src/components/NavBarLastPage/login.png"
          alt="login"
        />
      </a>
    </div>
  );
}

export default LoginSignup;