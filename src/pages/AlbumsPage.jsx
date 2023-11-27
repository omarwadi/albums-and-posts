
import '../App.css';
import Button from '../components/Button/Button';
import AlbumCard from '../components/AlbumCard/AlbumCard.jsx';
import '../components/Button/Button'
import '../components/AlbumCard/AlbumCard'
import React, { useEffect, useState } from 'react';
import { Spinner, Heading } from '@chakra-ui/react'

function Albums() {
  const [albumsCounter, setalbumsCounter] = useState(2)
  const [albums, setAlbums] = useState([]);
  const [loading, setloading] = useState(false);


  useEffect(() => {
    const getAlbums = async () => {
      try {
        let albumsResponse = await fetch("https://jsonplaceholder.typicode.com/albums");

        if (!albumsResponse.ok) {
          throw new Error("Error, please try again");
        }

        let albumsData = await albumsResponse.json();
        setAlbums(albumsData)
        setloading(true)
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };

    getAlbums(); 

  }, []);

  return (
    <>
      {
        loading?
        <div>
        <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
          <Heading id="postHeader" style={{marginTop:"5rem"}}>Albums</Heading>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "space-around"}}>
        {
            albums.slice(0,albumsCounter).map((album, index) => {
              return <AlbumCard key={index} album={album} />
          })
        }
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px", marginBottom: "40px", marginLeft: "20px"}}>
          <Button buttonValue="Show More Albums" onclick={() =>setalbumsCounter((prev) => prev+2)}/>
        </div>
      </div>
      :<Spinner marginTop={"25%"} marginLeft={"50%"}/>
    }
    </>
  );
}

export default Albums;
