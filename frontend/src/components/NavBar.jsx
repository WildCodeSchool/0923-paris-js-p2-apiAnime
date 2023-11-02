import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <img
        className="IriyajoLogo"
        src="../src/components/images/Iriyajo2.png"
        alt="logo Iriyajo"
      />
      <div className="Logo">
        <img
          className="NuageMagikLogo"
          src="../src/components/images/NuageMagik.png"
          alt="logo NuageMagik"
        />
        <img
          className="AkatsukiLogo"
          src="../src/components/images/Akatsuki-Logo 1@2x.png"
          alt="logo Akatsuki"
        />
      </div>
    </div>
  );
}

export default NavBar;
