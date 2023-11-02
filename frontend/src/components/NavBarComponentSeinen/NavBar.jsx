import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <img
        className="IriyajoLogo"
        src="../src/assets/images/NavBar/Iriyajo2.png"
        alt="logo Iriyajo"
      />
      <div className="Logo">
        <img
          className="NuageMagikLogo"
          src="../src/assets/images/NavBar/NuageMagik.png"
          alt="logo NuageMagik"
        />
        <img
          className="AkatsukiLogo"
          src="../src/assets/images/NavBar/Akatsuki-Logo 1@2x.png"
          alt="logo Akatsuki"
        />
      </div>
    </div>
  );
}

export default NavBar;
