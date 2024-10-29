import { useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@ui';

export const Theme = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark((prev) => !prev);
    document.body.classList.toggle('dark');
  };

  return (
    <Button onClick={darkModeHandler}>
      {dark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
