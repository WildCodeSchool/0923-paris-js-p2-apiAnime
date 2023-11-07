import "./NavBarPages.css";

function NavBarPages() {
  return (
    <main>
      <div className="NavBarHome">
        <a href="/">
          <img
            className="IriyajoLogo"
            src="../src/assets/images/NavBar/Iriyajo2.png"
            alt="logo Iriyajo"
          />
        </a>
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
        {/* <div className="LogoHome">
          <img
            className="LogoIriyajo"
            src="../src/assets/images/Iriyajo.jpg"
            alt="logo Iriyajo"
          />
        </div> */}
      </div>
    </main>
  );
}

export default NavBarPages;
