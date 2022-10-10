import TextField, { type TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HttpsIcon from '@mui/icons-material/Https';
import { type ForwardedRef, forwardRef, useState } from 'react';

export const PasswordInput = forwardRef(function (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <TextField
      ref={ref}
      fullWidth
      name="password"
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      classes={{ root: 'bg-light rounded' }}
      placeholder="Digite sua senha"
      defaultValue=""
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HttpsIcon color={props.error ? 'error' : 'primary'} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={showPassword ? 'Esconder senha' : 'Mostrar senha'} placement="right" arrow>
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff color="secondary" /> : <Visibility color="secondary" />}
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
});
