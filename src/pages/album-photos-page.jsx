import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams} from 'react-router-dom';
import { Spinner, Heading, Center, Divider } from '@chakra-ui/react'

export default function AlbumPhotos(props) {
    let {id} = useParams()
    id = Number(id)
    //let location = useLocation();
    //let searchParams = new URLSearchParams(location.search);
    //let id = Number(searchParams.get("albumId"));
    
    console.log(typeof(id))
    const [albumsImage, setalbumsImage] = useState("https://via.placeholder.com/600/92c952");
    const [loader, setloader] = useState(false)
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
          setloader(true)
        } catch (error) {
          console.error("There has been a problem with your fetch operation:", error);
        }
      };
    
      getPhotos();
      
    }, []);
    console.log("ID: ", id)

  return (
    <>
        {loader?
          <div style={{margin: "3rem"}}>
            <div>
            <Center>
              <Heading mb="2rem">Album Photos</Heading>
            </Center>
            </div>
            <Center>
              <img src={albumsImage} alt="Album Image" style={{marginBottom: "1rem", marginTop: "2rem"}}></img>
            </Center>
            <div style={{display: "flex", flexDirection: "row", overflowX: "scroll",}}>

            {
              photos.map((photo, index) => {
                if(id === photo.albumId){
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
        :<Spinner marginTop={"25%"} marginLeft={"50%"}/>
        }
    </>
  )
}