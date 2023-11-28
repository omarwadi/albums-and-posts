import React, { useState, useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom';

export default function AlbumPhotos(props) {
    let location = useLocation();
    let searchParams = new URLSearchParams(location.search);
    let id = Number(searchParams.get("albumId"));
    
    console.log(typeof(id))
    const [albumsImage, setalbumsImage] = useState("https://via.placeholder.com/600/92c952");

    const [photos, setPhotos] = useState([]);

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
    console.log("ID: ", id)

  return (
    <div>
        {
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <img src={albumsImage} alt="Album Image" style={{marginBottom: "1rem"}}></img>
            <div style={{display: "flex", flexDirection: "row", overflowX: "scroll",}}>
            {
              photos.map((photo, index) => {
                if(id === photo.albumId){
                  console.log("HEYYYYY")
                  return <img src={photo.thumbnailUrl} key={index} onClick={() => setalbumsImage(photo.url)}></img>
                }
              })
            }
            </div>
            <div className="content" style={{marginTop:"2rem"}}>
                <Link to="/AlbumsPage">
                    <button className="btn-component">
                        Close
                    </button>
                </Link>
            </div>
          </div>
        </div>
        }
    </div>
  )
}