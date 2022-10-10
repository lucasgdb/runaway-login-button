import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function RememberMeCheckbox() {
  return (
    <FormControlLabel
      classes={{ label: 'text-light text-[13px]' }}
      label="Lembrar-me"
      name="rememberMe"
      control={<Checkbox defaultChecked />}
    />
  );
}
