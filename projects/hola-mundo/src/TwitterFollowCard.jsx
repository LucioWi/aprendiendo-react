export function TwitterFollowCard({ username, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/x/${username}`
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
                <button className="tw-followCard-button">{isFollowing}</button>
            </aside>
        </article>
    )
}