import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className="TwitterUsersFollow">
        <TwitterFollowCard username="@arroba" name="Nombre de usuario" isFollowing/> {/*Si el valor de un booleano es true no hace falta poner el "={true}".*/}
        <TwitterFollowCard username="@BocaJrsOficial" name="Boca Juniors" isFollowing={false}/>
        <TwitterFollowCard username="@DavooXeneizeJRR" name="Davoo Xeneize" isFollowing={false}/>
        </section> // El <> es utilizado para mostrar más de un componente a la vez. Puede ser cualquier cosa realmente, como en este caso un section.
    )
}
