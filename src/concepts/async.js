import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncComponent = (element) => {
    const id1 = "5d86371fd55e2e2a30fe1cc3";
    console.log("Inicio del componente");
    findHero(id1)
        .then((name) => (element.innerHTML = name))
        .catch((err) => (element.innerHTML = err));
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero) throw `No se encontro Heroe con el ID ${id}`;

    return hero.name;
};
