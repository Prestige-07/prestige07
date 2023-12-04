import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  List,
  Item,
  ImageThumb,
  Image,
  DeleteButton,
  DeleteIcon,
} from './GalleryList.styled';

import { deletePhotosGroup } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

export const GalleryList = () => {
  const gallery = useSelector(selectGallery);
  const dispatch = useDispatch();

  const handleDeletePhotos = id => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити зображення?'
    );
    if (confirmDelete) {
      dispatch(deletePhotosGroup(id));
    }
  };

  return (
    <List>
      {gallery.map(item => (
        <Item key={item._id}>
          <ImageThumb>
            <Image
              src={item.beforePhoto.url}
              alt={item.beforePhoto.alt || 'Зображення'}
            />
          </ImageThumb>
          <DeleteButton
            title="Видалити"
            onClick={() => handleDeletePhotos(item._id)}
          >
            <DeleteIcon />
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
