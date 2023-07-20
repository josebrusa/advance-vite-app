import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const callbacksComponent = (element) => {
    const id = "5d86371f9f80b591f499df32";
    findHero(id, (error, hero) => {
        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });
};

/**
 *
 * @param {String} id
 * @param { (error: String|null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, hero);
};
