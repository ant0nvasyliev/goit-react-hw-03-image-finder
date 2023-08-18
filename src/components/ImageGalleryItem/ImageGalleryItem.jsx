// Імпорт бібліотеки React та компонента Component з React
import React, { Component } from 'react';

// Імпорт компонента Modal з файлу '../Modal/Modal'
import { Modal } from '../Modal/Modal';

// Імпорт стилізованих компонентів GalleryListItem та GalleryListImage з файлу './ImageGalleryItem.styled'
import { GalleryListItem, GalleryListImage } from './ImageGalleryItem.styled';

// Класовий компонент ImageItem
export default class ImageItem extends Component {
  // Початковий стан компонента
  state = {
    showModal: false, // Відкрите чи закрите модальне вікно
  };

  // Метод для зміни стану модального вікна
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal, // Інвертуємо значення showModal
    }));
  };

  render() {
    // Деструктуризація стану showModal зі стану
    const { showModal } = this.state;

    // Деструктуризація пропсу image
    const { image } = this.props;

    return (
      <>
        {/* Елементи галереї */}
        <GalleryListItem>
          {/* Зображення списку галереї */}
          <GalleryListImage
            src={image.webformatURL} // URL зменшеного зображення
            alt={image.tags} // Теги зображення
            onClick={this.toggleModal} // Обробник кліку для відкриття модального вікна
          />
          {/* Умовний рендерінг модального вікна */}
          {showModal && ( // Якщо showModal === true, рендеримо модальне вікно
            <Modal
              largeImageURL={image.largeImageURL} // URL великого зображення
              tags={image.tags} // Теги зображення
              onClose={this.toggleModal} // Обробник для закриття модального вікна
            />
          )}
        </GalleryListItem>
      </>
    );
  }
}
