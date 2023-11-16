import "./formulaireSignUp.css";

function FormulaireSignUp() {
  return (
    <form className="registrationForm">
      <div className="formWrap">
        <p className="textSignup">Sign Up</p>
        <div className="inputGrp">
          <div className="inputWrap">
            <label htmlFor="fname">First Name</label>
            <input className="containerInput" type="text" id="fname" />
            <div className="inputWrap">
              <label htmlFor="lname">Last Name</label>
              <input className="containerInput" type="text" id="lname" />
            </div>
          </div>
          <div className="inputWrap">
            <label htmlFor="email">Email Adress</label>
            <input className="containerInput" type="text" id="email" />
          </div>
          <span>Gender</span>
          <div className="containerInput">
            <ul>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="input_radio"
                />
                <span>Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="input_radio"
                />
                <span>Female</span>
              </label>
            </ul>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <div className="inputWrap">
              <input className="containerInput" type="text" id="city" />
            </div>
            <label htmlFor="country">Country</label>
            <div className="inputWrap">
              <input className="containerInput" type="text" id="country" />
            </div>
          </div>
        </div>
      </div>
      <button className="button3" type="button">
        Register Now
      </button>
    </form>
  );
}

export default FormulaireSignUp;
