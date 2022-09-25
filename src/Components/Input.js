import React, { forwardRef } from 'react';

const Input = forwardRef(({ id, onSubmit, btnText, disabled }, ref) => {
  return (
    <>
      <input type='text' id={id} ref={ref} />
      <button type='button' onClick={onSubmit}>
        {btnText}
      </button>
    </>
  );
});

export default Input;
