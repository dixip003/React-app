import { useRef } from 'react';
import MyInput from './MyInput';


export const Form = () => {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    ref.current.reset();
    ref.current.checkSubscibed('subscribed');
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Button Clicked
      </button>
    </form>
  );
}