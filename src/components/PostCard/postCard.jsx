import React from "react";
import { Text } from '@chakra-ui/react'

export default function PostCard(props) {
  const { title, body } = props.post;

  return (
    <div className="card">
      <div className="content">
        <Text fontSize='2xl' as='b'>{title}</Text>
        <p className="para">{body}</p>
      </div>
    </div>
  );
}
