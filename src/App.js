import { useEffect, useState } from "react";
import "./App.css";
import AnimeCard from "./components/AnimeCard";
import AnimeCardList from "./components/AnimeCardList";
import Header from "./components/Header";

function App(props) {
  const [animes, setAnimes] = useState([
    { id: 1, titule: "ejkkek" },
    { id: 2, titule: "333333333" },
    { id: 3, titule: "44444" },
    { id: 4, titule: "66666666" },
    { id: 5, titule: "1111" },
  ]);
  return (
    <>
      <div className="App">
        <Header></Header>
        {animes.map((anime) => (
          <AnimeCard anime={anime} key={anime.id}></AnimeCard>
        ))}
      </div>
      <span>djdkkdkdkd</span>
    </>
  );
}

export default App;
