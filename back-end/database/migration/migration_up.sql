CREATE TYPE difficulte_recette AS ENUM ('facile', 'moyen', 'difficile');
CREATE TYPE visibilite_recette AS ENUM ('prive', 'publique');


CREATE TABLE utilisateur (
    id SERIAL PRIMARY KEY, 
    nom VARCHAR(100) NOT NULL, 
    prenom VARCHAR(100) NOT NULL,
    pseudo VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    mot_de_passe_hash VARCHAR(255) NOT NULL
);

CREATE TABLE categorie (
    id SERIAL PRIMARY KEY, 
    nom VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE recette (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    temps_preparation INTEGER NOT NULL,
    temps_cuisson INTEGER NOT NULL,
    nombre_portions INTEGER NOT NULL,
    difficulte difficulte_recette NOT NULL,
    visibilite visibilite_recette NOT NULL DEFAULT 'prive',
    photo TEXT,
    etapes TEXT NOT NULL,

    utilisateur_id INTEGER NOT NULL REFERENCES utilisateur(id),
    categorie_id INTEGER NOT NULL REFERENCES categorie(id)
);

CREATE TABLE recette_enregistree (
    utilisateur_id INTEGER NOT NULL REFERENCES utilisateur(id),
    recette_id INTEGER NOT NULL REFERENCES recette(id),
    PRIMARY KEY (utilisateur_id, recette_id)
);

CREATE TABLE ingredient (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) UNIQUE NOT NULL

);


CREATE TABLE recette_ingredient (
    recette_id INTEGER NOT NULL REFERENCES recette(id),
    ingredient_id INTEGER NOT NULL REFERENCES ingredient(id),
    quantite DECIMAL(10, 2) NOT NULL,
    unite VARCHAR(50) NOT NULL,
    PRIMARY KEY (recette_id, ingredient_id)
);

