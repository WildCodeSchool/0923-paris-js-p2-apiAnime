import { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime?q=genre&sfw")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setFilteredDatas(data.data);
      });
  }, []);
  const filterData = (filterValue) => {
    const filtered = datas.filter((anime) =>
      anime.toLowerCase().includes(filterValue.toLowerCase())
    );
    console.info(filtered);
    setFilteredDatas(filtered);
  };
  return (
    <>
      <h1>IRIYAJO</h1>
      <input
        type="text"
        placeholder="Rechercher un anime"
        onChange={(e) => filterData(e.target.value)}
      />

      {filteredDatas.map((integer) => (
        <div key={integer}>
          {integer.genres.map((genre) => {
            return <p>{genre.name}</p>;
          })}
          <img src={integer.images.webp.small_image_url} alt={integer.title} />
        </div>
      ))}
    </>
  );
}

export default App;
