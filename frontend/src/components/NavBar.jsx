import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <img
        className="IriyajoLogo"
        src="../src/components/NavBarLastPage/Iriyajo2.png"
        alt="logo Iriyajo"
      />
      <div className="Logo">
        <img
          className="NuageMagikLogo"
          src="../src/components/NavBarLastPage/NuageMagik.png"
          alt="logo NuageMagik"
        />
        <img
          className="AkatsukiLogo"
          src="../src/components/NavBarLastPage/Akatsuki-Logo 1@2x.png"
          alt="logo Akatsuki"
        />
      </div>
    </div>
  );
}

export default NavBar;
