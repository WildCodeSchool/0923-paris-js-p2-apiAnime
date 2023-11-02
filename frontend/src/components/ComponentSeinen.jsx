import "./ComponentSeinen.css";
// import { useState, useEffect } from "react";

function ComponentSeinen() {
  // {
  //   const [stores, setStores] = useState([]);
  // }

  // {
  //   useEffect(() => {
  //   fetch("https://wild.creativebrain.fr/stores")
  //     .then((res) => res.json())
  //     .then((data) => setStores(data));
  // }, []);
  // return (
  //   <div className="IconGame">
  //     {stores.map((store) => {
  //       return (
  //         <article key={store.storeID}>
  //           <p>{store.storeName}</p>
  //           <img
  //             src={`https://www.cheapshark.com${store.images.logo}`}
  //             alt="logo"
  //           />
  //         </article>
  //       );
  //     })}
  // }
  return (
    <>
      <div className="Categories">
        <a href="0">
          <img
            src="../src/assets/images/CapsuleCorp.png"
            alt="CapsuleCorp logo"
          />
        </a>
        <h1>Autre catégories</h1>
      </div>

      <div className="resume">
        <img
          className="anime"
          src="../src/assets/images/Seinen/Ajin.jpg"
          alt="Ajin"
        />

        <img
          className="anime"
          src="../src/assets/images/Seinen/Akira.jpg"
          alt="Akira"
        />
        <img
          className="anime"
          src="../src/assets/images/Seinen/Berserk.jpg"
          alt="Berserk"
        />
        <img
          className="anime"
          src="../src/assets/images/Seinen/OnePunchMan.jpg"
          alt="OnePunchMan"
        />
        <img
          className="anime"
          src="../src/assets/images/Seinen/ShigekiNoKyojin.jpg"
          alt="ShigekiNoKyojin"
        />
        <img
          className="anime"
          src="../src/assets/images/Seinen/TokyoGhoul.jpg"
          alt="TokyoGhoul"
        />
      </div>
    </>
  );
}

export default ComponentSeinen;
