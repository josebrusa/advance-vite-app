import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncComponent = (element) => {};

const findHero = (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    return hero;
};
