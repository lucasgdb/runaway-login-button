import { Button } from '@mui/material';
import { useRef } from 'react';

interface Props {
  shouldRunAway: boolean;
}

export function LoginButton({ shouldRunAway }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleMoveAway() {
    if (!shouldRunAway || !buttonRef.current) {
      return;
    }

    if (buttonRef.current.style.left === '0px') {
      buttonRef.current.style.left = '100%';
      buttonRef.current.style.transform = 'translateX(-100%)';
    } else {
      buttonRef.current.style.left = '0';
      buttonRef.current.style.transform = 'translateX(0)';
    }
  }

  return (
    <Button
      ref={buttonRef}
      variant="contained"
      color="primary"
      type="submit"
      onMouseEnter={handleMoveAway}
      onClick={handleMoveAway}
      style={{ transform: 'translateX(-100%)' }}
      className="text-[#fafafa] rounded h-full w-36 absolute left-full transition-all"
    >
      Entrar
    </Button>
  );
}
