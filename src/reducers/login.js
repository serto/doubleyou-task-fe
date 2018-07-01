const initialState = {
  stateLogin: 0,
}

const login = (state = initialState, action) => {

  switch (action.type) {

	  case 'SET_STATELOGIN':
      state.stateLogin =+ 1
      return state
        
    default:
      return state
  }

}

export default login

/*

En el reducer se reciben las respuestas de las llamadas que hacemos a las URL y las tratamos.
En este fichero lo único que modifico, es el estado, para cambiar lo que se muestra en el formulario. 
Para tratar lo que recibimos de la llamada deberíamos escribir algo así en el switch: 


  switch (action.type) {

    case 'SET_STATELOGIN':
      return state
        
    case 'SET_STATELOGIN_SUCCESS':
      //cambios en el estado de la aplicación
      return state

    case 'SET_STATELOGIN_FAIL':
      //cambios en el estado de la aplicación
      return state

    default:
      return state
  }
*/