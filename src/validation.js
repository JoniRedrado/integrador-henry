export function formValidation (inputs){
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /\d/;

  let errors = {}
  if( !regexEmail.test(inputs.email) ) errors.email = 'Debe ser un correo electrónico';
  if ( inputs.email.length >= 35 ) errors.email = 'Deben tener menos de 35 caracteres';
  if ( inputs.email.length === 0 ) errors.email = 'El email no puede estar vacio';

  if ( !regexPassword.test(inputs.password)) errors.password = 'Debe contener al menos un numero';
  if ( inputs.password.length < 6 || inputs.password.length > 10) errors.password = 'Deben ser entre 6 y 10 caracteres, con al menos 1 numero'
  
  console.log(errors);
  return errors
}