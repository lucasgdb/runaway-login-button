import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { EmailInput } from './components/EmailInput';
import { ForgotPasswordHyperlink } from './components/ForgotPasswordHyperlink';
import { LoginButton } from './components/LoginButton';
import { PasswordInput } from './components/PasswordInput';
import { RememberMeCheckbox } from './components/RememberMeCheckbox';

type FormValues = {
  email: string;
  password: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div className="h-screen bg-secondary px-4 flex justify-center items-center">
      <div className="">
        <p className="text-[#fafafa] m-0">
          Faça seu login para
          <br />
          acessar a plataforma.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[358px] flex flex-col mt-8">
          <div className="flex flex-col gap-2">
            <EmailInput
              {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
              error={Boolean(errors.email)}
            />
            <PasswordInput
              {...register('password', { required: true, minLength: 4 })}
              error={Boolean(errors.password)}
            />
          </div>

          <div className="flex flex-col justify-between py-6 sm:flex-row sm:items-center">
            <RememberMeCheckbox />
            <ForgotPasswordHyperlink />
          </div>

          <div className="w-full h-14 relative">
            <LoginButton shouldRunAway={Boolean(errors.email || errors.password)} />
          </div>
        </form>
      </div>
    </div>
  );
}
