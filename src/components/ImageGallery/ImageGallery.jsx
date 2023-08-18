// Імпорт бібліотеки React
import React from 'react';

// Імпорт компоненту ImageGalleryList з файлу './ImageGallery.styled'
import { ImageGalleryList } from './ImageGallery.styled';

// Імпорт компонента ImageGalleryItem з файлу '../ImageGalleryItem/ImageGalleryItem'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// Оголошення функційного компоненту ImageGallery з параметром images
export const ImageGallery = ({ images }) => {
  return (
    // Відображення списку зображень у стилізованому компоненті ImageGalleryList
    <ImageGalleryList>
      {/* Проходження по кожному елементу масиву зображень і створення компонента ImageGalleryItem */}
      {images.map(image => (
        // Кожен зображення передається як параметр до компонента ImageGalleryItem, вказуючи унікальний ключ
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImageGalleryList>
  );
};
