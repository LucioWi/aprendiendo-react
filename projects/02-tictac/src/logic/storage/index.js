export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui partida
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}


// Todo lo que entra en la carpeta de logic es parte de App.jsx que es javascript puro y que se puede separar para tener un código mucho mas limpio.
// Esto al ser javascript a secas puede servir para cualquier otro framework o trabajo aparte