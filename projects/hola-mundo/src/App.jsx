import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className="TwitterUsersFollow">
        <TwitterFollowCard username="@arroba" name="Nombre de usuario" initialisFollowing/>
        <TwitterFollowCard username="@BocaJrsOficial" name="Boca Juniors" initialisFollowing={false}/>
        <TwitterFollowCard username="@DavooXeneizeJRR" name="Davoo Xeneize" initialisFollowing={false}/>
        </section> // El <> es utilizado para mostrar más de un componente a la vez. Puede ser cualquier cosa realmente, como en este caso un section.
    )
}

//Si el valor de un booleano es true no hace falta poner el "boolean={true}".