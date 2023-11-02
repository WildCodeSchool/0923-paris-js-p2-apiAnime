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
          src="../src/assets/images/TestGoku/Sangoku.jpg"
          alt="sangoku"
        />

        <img
          className="anime"
          src="../src/assets/images/TestGoku/sayen.jpg"
          alt="sangoku"
        />
        <img
          className="anime"
          src="../src/assets/images/TestGoku/sayen3.png"
          alt="sangoku"
        />
        <img
          className="anime"
          src="../src/assets/images/TestGoku/instinc.jpg"
          alt="sangoku"
        />
        <img
          className="anime"
          src="../src/assets/images/TestGoku/instinc2.jpg"
          alt="sangoku"
        />
        <img
          className="anime"
          src="../src/assets/images/TestGoku/instinc3.jpg"
          alt="sangoku"
        />
      </div>
    </>
  );
}

export default ComponentSeinen;
