

const Connexion = ({ setConnecte }) => {

    const gererEnvoi = (event) => {
        event.preventDefault()
        setConnecte(true)
        console.log("flfsnfq")
    }


    return (
        <form onSubmit={gererEnvoi}>
            <label htmlFor='username'>Nom utilisateur</label>
            <input id="username"></input>
            <br />
            <label htmlFor='motdepasse'>Mot de passe</label>
            <input id="motdepasse"></input>
            <br />
            <button type="submit">Se connecter</button>
        </form>
    )
}

export default Connexion