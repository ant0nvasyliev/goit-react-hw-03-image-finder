// Імпорт бібліотеки axios для роботи з HTTP-запитами
import axios from "axios";

// Встановлення базової URL для всіх HTTP-запитів до API
axios.defaults.baseURL = 'https://pixabay.com/api/';

// API-ключ для доступу до API Pixabay
const API_KEY = '38243534-5c7cfe447b5c7a0fae0b6f146';

// Кількість зображень на одній сторінці
export const perPage = 12;

// Функція для отримання зображень з API
export const getImages = async (query, page) => {
// Вирізаємо ідентифікатор запиту
   const trimmedRequest = query.slice(query.indexOf('/') + 1);
   // Виконуємо HTTP-запит до API Pixabay з вказаними параметрами
   const response = await axios.get(
      `?key=${API_KEY}&q=${trimmedRequest}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
   );
   return response.data; // Повертаємо дані відповіді з API
};

// Функція для нормалізації масиву зображень
export const normalizedImages = imagesArray =>
   imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
     // Повертаємо об'єкт зі зменшеними полями для зображення
      return { id, tags, webformatURL, largeImageURL };
   });
