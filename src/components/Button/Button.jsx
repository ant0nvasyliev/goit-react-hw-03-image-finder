// Імпорт бібліотеки React
import React from 'react';

// Імпорт компоненту LoadMoreButton з файлу './Button.styled'
import { LoadMoreButton } from './Button.styled';

// Оголошення функційного компоненту Button з параметром onClick
export const Button = ({ onClick }) => {
  return (
    // Огороджений блок div, який містить кнопку
    <div>
      {/* Кнопка зі стилізованим компонентом LoadMoreButton */}
      <LoadMoreButton type="button" onClick={onClick}>
        load more
      </LoadMoreButton>
    </div>
  );
};


