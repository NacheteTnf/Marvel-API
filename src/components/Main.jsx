import { useState, useEffect, useContext } from "react";
import axios from "axios";

import DataContext from "../context/DataContext";
import Card from "./Card";
import Spinner from "./Spinner";

import bgImage from "../images/bg.jpg";
import logoImage from "../images/logo.png";

const Main = () => {
  const [characterData, setCharacterData] = useState([]);
  const [comicData, setComicData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    urlCharacter,
    urlComic,
    urlSeries,
    loading,
    setLoading,
    publicKey,
    hash,
  } = useContext(DataContext);

  const searchMarvelCharacter = () => {
    setSearchTerm("");
    setLoading(true);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&ts=1&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => {
        setCharacterData(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const fetchData = async (url, setData) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData(urlCharacter, setCharacterData);
    fetchData(urlComic, setComicData);
    fetchData(urlSeries, setSeriesData);
  }, []);

  return (
    <>
      <div className="header">
        <div className="bg">
          <img src={bgImage} alt="Background image" />
        </div>
        <div className="search-bar">
          <img src={logoImage} className="logo" alt="logo image" />
          <input
            type="search"
            placeholder="Search the Here"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMarvelCharacter();
              }
            }}
          />
          <button className="btn-search" onClick={searchMarvelCharacter}>
            Search
          </button>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="card-title">Characters</h1>
            <div className="content">
              <Card data={characterData} type="characters" />
            </div>
            <h1 className="card-title">Comics</h1>
            <div className="content">
              <Card data={comicData} type="comics" />
            </div>

            <h1 className="card-title">Series</h1>
            <div className="content">
              <Card data={seriesData} type="series" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
