import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar'; // Імпорт компонента пошукової панелі
import * as API from './api'; // Імпорт функцій для роботи з API
import { ImageGallery } from './ImageGallery/ImageGallery'; // Імпорт компонента галереї зображень
import { Loader } from './Loader/Loader'; // Імпорт компонента завантаження
import { Button } from './Button/Button'; // Імпорт компонента кнопки
import { ToastContainer, toast, Slide } from 'react-toastify'; // Імпорт компонентів для сповіщень
import 'react-toastify/dist/ReactToastify.css'; // Імпорт стилів для сповіщень
import { AppWrapper } from './App.styled'; // Імпорт стилів для обгортки додатку

export default class App extends Component {
  state = {
    searchName: '', // Запит для пошуку
    images: [], // Зображення
    currentPage: 1, // Поточний номер сторінки
    error: null, // Помилка
    isLoading: false, // Індикатор завантаження зображень
    totalPages: 0, // Загальна кількість сторінок
  };

  componentDidUpdate(_, prevState) {
    // Перевіряємо, чи змінився запит або номер сторінки
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages(); // Отримуємо та додаємо зображення до стану
    }
  }

  // Завантажити більше зображень, збільшуючи номер поточної сторінки
  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  // Обробка подання форми від компонента SearchBar
  handleSubmit = query => {
    this.setState({
      searchName: `${Date.now()}/${query}`, // Записуємо запит для пошуку з унікальним id
      // searchName: query, // Записуємо запит для пошуку з унікальним id
      images: [], // Очищуємо масив зображень
      currentPage: 1, // Скидаємо номер сторінки на 1
    });
  };

// Функція для оновлення стану images (скидання галереї)
  resetGallery = () => {
    this.setState({ images: [] });
  };

  // Метод для додавання зображень
  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true }); // Встановлюємо прапорець завантаження

      // API-запит до Pixabay
      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        // Якщо зображень не знайдено
        return toast.info('image was not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages], // Додаємо нові зображення
        isLoading: false, // Вимикаємо прапорець завантаження
        error: '', // Очищаємо повідомлення про помилку
        totalPages: Math.ceil(data.totalHits / 12), // Встановлюємо кількість сторінок
      }));
    } catch (error) {
      this.setState({ error: 'Виникла помилка!' }); // Встановлюємо повідомлення про помилку
    } finally {
      this.setState({ isLoading: false }); // Вимикаємо прапорець завантаження незалежно від результату
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <AppWrapper>
        <ToastContainer transition={Slide} /> {/* Контейнер для сповіщень */}
        <SearchBar onSubmit={this.handleSubmit} onReset={this.resetGallery} /> {/* Компонент пошукової панелі */}
        {images.length > 0 ? (
          <ImageGallery images={images} /> // Відображення галереї зображень
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
            }}
          >
            empty
          </p>
        )}
        {isLoading && <Loader />} {/* Відображення індикатора завантаження */}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} /> // Кнопка завантаження додаткових зображень
        )}
      </AppWrapper>
    );
  }
}
