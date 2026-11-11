import pool from "../config/db.js";

const COLONES_PUBLIQUES = 'id, nom, prenom, pseudo, email'

export const inscription = async (nom, prenom, pseudo, email, mot_de_passe_hash) => {
    const query = `
    INSERT INTO utilisateur (nom, prenom, pseudo, email, mot_de_passe_hash)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING ${COLONES_PUBLIQUES}
`;
    const values = [nom, prenom, pseudo, email, mot_de_passe_hash];
    const result = await pool.query(query,values);

    return result.rows[0]
}