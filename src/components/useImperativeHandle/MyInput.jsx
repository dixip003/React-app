import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = ({props}, ref) => {
  const inputRef = useRef(null);

  // We want to expose this to the parent
  const reset = () => {
    console.log('reset called');
  };

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
      checkSubscibed: (value) => console.log(value),
      reset,
    };
  });

  return (
  <>
    <input {...props} ref={inputRef} />
  </>
  )
}

export default forwardRef(MyInput)