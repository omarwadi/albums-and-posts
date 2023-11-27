
import '../App.css';
import Button from '../components/Button/Button';
import PostCard from '../components/PostCard/postCard';
import '../components/Button/Button';
import '../components/PostCard/Card.css'
import React, { useEffect, useState } from 'react';
import { Spinner, Heading } from '@chakra-ui/react'


function Home() {
  const [postCounter, setpostCounter] = useState(3)
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const getPosts = async () => {
      try {
        let postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!postResponse.ok) {
          throw new Error("Error, please try again");
        }

        let postsData = await postResponse.json();
        setloading(true)
        setPosts(postsData);
        console.log(posts)
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      }
    };

    getPosts(); 

  }, []);

  return (
    <>
    {
      loading?
      <div>
        <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
          <Heading id="postHeader" style={{marginTop:"5rem"}}>Posts</Heading>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "space-around",marginRight:"3%"}}>
          {
            posts.slice(0,postCounter).map((post, index) => {
              return <PostCard key={index} post={post} />
          })
          }
          
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px", marginBottom: "40px", marginLeft: "20px"}}>
          <Button buttonValue="Show More Posts" onclick={() =>setpostCounter((prev) => prev+6)}/>
        </div>
      </div>
      :<Spinner marginTop={"25%"} marginLeft={"50%"}/>
      }
    </>
    
  );
}

export default Home;
