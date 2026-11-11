

function Connexion() {
    return (
        <form>
            <label htmlFor='username'>Nom utilisateur</label>
            <input id="username"></input>
            <br />
            <label htmlFor='motdepasse'>Mot de passe</label>
            <input id="motdepasse"></input>
            <br />
            <button>Se connecter</button>
        </form>
    )
}

export default Connexion