import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import Spinner from "./Spinner";

const Marvel = () => {
  const { loading, setLoading, publicKey, hash } = useContext(DataContext);
  const { id, type } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/${type}/${id}?ts=1&apikey=${publicKey}&hash=${hash}`
        );
        setItem(response.data?.data?.results?.[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, publicKey, hash, setLoading]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : item ? (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={`${item.name ?? item.title} image`}
            />
          </div>
          <div className="left-box">
            <h1>{item.name ?? item.title}</h1>
            <h4>{item.description || "Description Not Found"}</h4>
          </div>
        </div>
      ) : (
        <h4>No se encontró información para el personaje con id {id}.</h4>
      )}
    </>
  );
};

export default Marvel;
