import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom';

export default function AlbumPhotos(props) {
    let location = useLocation();
    let id = location.state.albumId;
    let photos = location.state.albumPhotos;

    const [albumsImage, setalbumsImage] = useState("https://via.placeholder.com/600/92c952");


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
                if(id === photo.albumId)
                  return <img src={photo.thumbnailUrl} key={index} onClick={() => setalbumsImage(photo.url)}></img>
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