document.addEventListener('DOMContentLoaded', function() {

  //* Formulario
  let form = document.querySelector('#login-form');
  //* Email
  let email = document.querySelector('#input-email');
  //* let email = <input type="email" class="form-control" id="input-email" />
  //* password
  let password = document.querySelector('#password-input');

  //* Una función para validar

  function validate() {
    let emailValue = email.value; //* capturo lo que el usuario escribio en el input email
    //* regex (expresiones regulares)
    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    //* if
    //* mramos@correo.com
    if(!emailRegex.test(emailValue)) {
      // * la parte del true 
      document.querySelector("#emailHelp").innerHTML = "Por favor, ingrese un correo valido";
      return false; //*  el return indica que se termina función no se ejecuta nada mas!.
    } 
    //* continuo con la siguiente linea (correo valido) mramos@correo.com
   //* academyjava
    let passwordValue = password.value;

    if(!(passwordValue.length >= 6)) {
      console.log('la contraseña debe tener al menos 6')
      document.querySelector('#passwordHelp').innerHTML = "La contraseña debe tener al menos 6 caracteres";
      return false;
    } 
    // if(password.length < 6) {
    //   document.querySelector('#passwordHelp').innerHTML = "La contraseña debe tener al menos 6 caracteres";
    // }
    //* continuo con la siguiente linea (correo valido) mramos@correo.com y con una (contraseña valida) "academyjava"
    return true;
  }
  form.addEventListener("submit", function(event) {
    if(!validate()) {
      event.preventDefault();
      //* se impide que el formulario se envie
    } else {
      alert("Enviamos el formulario, campos validos!")
    }
    
  })
});