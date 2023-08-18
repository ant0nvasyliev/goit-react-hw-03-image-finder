// Імпорт компонента ColorRing з бібліотеки 'react-loader-spinner'
import { RotatingLines } from 'react-loader-spinner';

import {LoaderWrapper} from './Loader.styled'

// Функційний компонент Loader, який відображає анімований завантажувач
export const Loader = () => {
  return (
    <LoaderWrapper>
      {/* Компонент RotatingLines для відображення анімованого завантажувача */}
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </LoaderWrapper>
  );
};
