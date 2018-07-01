

export const setStateLogin = (mail, pswd) => {
  //console.log(mail);
  //console.log(pswd);

  return {
    type: 'SET_STATELOGIN'
  }
};

/*

En este fichero de acciones es donde se deberían haber usado los ficheros de join.txt y login.txt 
para obtener la variable 'status' de estos ficheros, pero al usar Redux para las llamadas y modificar el estado de la 
aplicación, no me ha hecho falta.

En la carpeta reducers (fichero login.js) está como se deberían tratar las respuestas.
A parte, para hacer las llamadas, se debería usar AXIOS y configurar una conexión a la
URL base que se atacará. En el fichero package.json está la llamada al paquete AXIOS preparado para usarse.

Pongo un ejemplo de cómo se debería hacer la llamada a la URL de 'newcustomer': 

export const setStateLogin = (mail, pswd) => {

  return {
    type: 'SET_STATELOGIN',
    payload: {
      request: {
        method: 'post',
        url: '/newcustomer',
        data: {
            email: mail,
            password: pswd
        }
      }
    }
  }
};


*/