import { useState } from "react"
export function TwitterFollowCard({ username, name, initialisFollowing}) { //username, name e isFollowing son PROPS, una vez creadas no se deben modificar mas adelante en el código.
    const [isFollowing, setIsFollowing] = useState(initialisFollowing)
    const imgSrc = `https://unavatar.io/x/${username}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir' //esto es basicamente un if
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="tw-followCard"/* Para crear una clase se debe usar className en vez de class ya que este mismo se usa para algo aparte en js*/>
            <header className="tw-followCard-header">
                <img src={imgSrc} alt="Icono" className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUsername">{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}