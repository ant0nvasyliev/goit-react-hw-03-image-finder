// Імпорт компонента Component з бібліотеки 'react'
import { Component } from 'react';

// Імпорт стилізованих компонентів SearchbarHeader, SearchForm, SearchFormButton та SearchFormInput з файлу './Searchbar.styled'
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput, ResetButton, OnTopButton } from './Searchbar.styled';

// Імпорт іконки пошуку з пакету react-icons/bi
import { BiSearchAlt } from 'react-icons/bi';

import { ToastContainer, toast, Slide } from 'react-toastify'; // Імпорт компонентів для сповіщень

import 'react-toastify/dist/ReactToastify.css'; // Імпорт стилів для сповіщень

// Класовий компонент SearchBar
export default class SearchBar extends Component {
  // Початковий стан компонента
  state = {
    inputValue: '', // Початкове значення для поля введення користувача
  };

  // Обробник зміни значення поля введення
  handleChange = event => {
    this.setState({ inputValue: event.target.value }); // Оновлюємо стан зі значенням поля введення
  };

  // Обробник подання форми
  handleSubmit = event => {
    event.preventDefault();

    // Валідація вводу
    if (this.state.inputValue.trim() === '') {
      toast.error('Введіть пошуковий запит.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return; // Вихід, якщо поле вводу порожнє
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  // Обробник обнулення масиву картинок в стейті
  handleReset = () => {
    this.props.onReset(); // Виклик функції resetGallery з батьківського елементу
  };

  // Обробник скролу догори
  handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Щоб прокрутка була плавною
    });
  };

  render() {
    return (
      // Елемент заголовка пошукової панелі
      <SearchbarHeader>
        <ToastContainer transition={Slide} /> {/* Контейнер для сповіщень */}
        {/* Форма для пошуку */}
        <SearchForm onSubmit={this.handleSubmit}>
          {/* Кнопка подання форми */}
          <SearchFormButton type='submit'>
            <span><BiSearchAlt size={25} /></span> {/* Відображення іконки пошуку */}
          </SearchFormButton>
          {/* Поле введення для пошуку */}
          <SearchFormInput 
            className="input" // Додатковий клас для стилізації, якщо потрібно
            type="text"
            autoFocus // Автофокус на полі введення
            placeholder="search here" // Плейсхолдер для поля введення
            value={this.state.inputValue} // Поточне значення поля введення
            onChange={this.handleChange} // Обробник зміни значення поля введення
          />
        </SearchForm>
        {/* Кнопка обнулення масиву картинок в стейті */}
        <ResetButton type='button' onClick={this.handleReset} >reset</ResetButton>
        {/* Кнопка скролу догори */}
        <OnTopButton type='button' onClick={this.handleScrollToTop} >up</OnTopButton>
      </SearchbarHeader>
    );
  }
}
