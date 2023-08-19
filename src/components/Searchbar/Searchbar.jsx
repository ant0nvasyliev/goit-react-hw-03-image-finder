import { Component } from 'react';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormInput, ResetButton, OnTopButton } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { ToastContainer, toast, Slide } from 'react-toastify'; // Імпорт компонентів для сповіщень
import 'react-toastify/dist/ReactToastify.css'; // Імпорт стилів для сповіщень

export default class SearchBar extends Component {
  // Початковий стан компонента
  state = {
    inputValue: '', // Початкове значення для поля введення
  };

  // Обробник зміни значення поля введення
  handleChange = event => {
    this.setState({ inputValue: event.target.value }); // Оновлюємо стан зі значенням поля введення
  };

  // Запобігання перезавантаження під час сабміту
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
      behavior: "smooth", // Плавний скрол
    });
  };

  render() {
    return (
      <SearchbarHeader>
        <ToastContainer transition={Slide} />
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type='submit'>
            <span><BiSearchAlt size={25} /></span> 
          </SearchFormButton>
          <SearchFormInput 
            className="input"
            type="text"
            autoFocus
            placeholder="search here"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
        <ResetButton type='button' onClick={this.handleReset} >reset</ResetButton>
        <OnTopButton type='button' onClick={this.handleScrollToTop} >up</OnTopButton>
      </SearchbarHeader>
    );
  }
}
