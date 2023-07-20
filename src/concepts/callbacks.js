import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const callbacksComponent = (element) => {
    const id = "5d86371f9f80b591f499df32";
    findHero(id, ({ name }) => {
        element.innerHTML = name;
    });
};

/**
 *
 * @param {String} id
 * @param { (hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find((hero) => hero.id === id);

    callback(hero);
};
