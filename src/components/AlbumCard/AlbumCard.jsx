import React, { useState, useEffect } from "react";
import '../../components/Button/Button.css'
import { Link} from 'react-router-dom';
import "../Modal/Modal.css";
import { Text,Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'


export default function AlbumCard(props) {

const [photos, setPhotos] = useState([]);
const { title, id } = props.album;



  useEffect(() => {
    const getPhotos = async () => {
      try {
        let photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");
  
        if (!photosResponse.ok) {
          throw new Error("Error, please try again");
        }
  
        let photosData = await photosResponse.json();
        setPhotos(photosData);
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };
  
    getPhotos();
  
  }, []);
  
  return (
    <>
      <div className="album-card">
        <div className="content">
          <Text fontSize='2xl' as='b' >{title}</Text>
            <Link to={{ pathname: "/AlbumsPhotos"}} state = {{albumId: id, albumPhotos: photos}} >
              <button className="btn">
                Show Photos
              </button>
            </Link>
        </div>
      </div>
    </>
  );
}

      