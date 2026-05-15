import { useState } from 'react';

export const Word_input = () => {
  const [value, setValue] = useState('');

  const handleEnter = (e) => {
    if(e.key === 'enter') {

    }

  }

  return (
    <>
      <form class="guess-input-wrapper" onKeyDown={handleEnter}>
        <label for="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" />
      </form>
    </>
  );
};
