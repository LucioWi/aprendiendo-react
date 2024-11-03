import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => { //forma de utizzar el useEffect
    console.log("efecto", {enabled})

    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({ x:clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove) //una suscripción
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    } // esto es para empezar desde 0 limpiando la suscripción. Es importante para el rendimiento
  }, [enabled]) // esto es una dependencia, es lo que necesita obtener el useEffect para renderizarse, en caso de que no tenga ninguna dependencia se va a renderizar automaticamente
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
      <button onClick={() => setEnabled(!enabled)}> {/*Esta es una forma realmente sencilla de cambiar el texto de un botón*/}
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

export default App
