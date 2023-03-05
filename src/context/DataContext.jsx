import React, { createContext, useState } from "react";
import md5 from "md5";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const publicKey = process.env.REACT_APP_MARVEL_API_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const hash = md5(1 + privateKey + publicKey);

  const urlCharacter = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlComic = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlSeries = `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${publicKey}&hash=${hash}`;

  return (
    <DataContext.Provider
      value={{
        publicKey,
        hash,
        urlCharacter,
        urlComic,
        urlSeries,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
