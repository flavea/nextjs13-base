import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Nama harus di-isi'),
  email: Yup.string().email('Email tidak valid').required('Email harus di-isi'),
  password: Yup.string()
    .required('Password harap di-isi.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password harus memiliki minimal 8 karakter, satu huruf kapital, satu angka, dan satu simbol.',
    ),
  confirm: Yup.string()
    .required('Konfirmasi password-mu.')
    .when('password', {
      is: (password: any) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Konfirmasi Password Salah',
      ),
    }),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email tidak valid').required('Email harus di-isi'),
  password: Yup.string().required('Password harus di-isi'),
});
