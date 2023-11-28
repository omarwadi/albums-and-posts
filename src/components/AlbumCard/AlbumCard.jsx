import '../../components/Button/Button.css'
import { Link} from 'react-router-dom';
import { Text} from '@chakra-ui/react'
export default function AlbumCard(props) {
const { title, id } = props.album;
  return (
    <>
      <div className="album-card">
        <div className="content">
          <Text fontSize='2xl' as='b'>{title}</Text>
            <Link to={`/AlbumsPhotos/${id}`}>
              <button className="btn">
                Show Photos
              </button>
            </Link>
        </div>
      </div>
    </>
  );
}

      