import PersonIcon from '@mui/icons-material/Person';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { type ForwardedRef, forwardRef } from 'react';

export const EmailInput = forwardRef(function (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <TextField
      ref={ref}
      name="email"
      placeholder="E-mail"
      type="email"
      variant="outlined"
      classes={{ root: 'bg-light rounded' }}
      defaultValue=""
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon color={props.error ? 'error' : 'primary'} />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
});
