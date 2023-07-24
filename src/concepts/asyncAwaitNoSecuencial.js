import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

export const asyncAwaitNoSecuencial = async (element) => {
    console.log("asyncAwaitNoSecuencial");

    console.time("Start");

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);
    element.innerHTML = `
    valor 1: ${value1} <br/>
    valor 2: ${value2} <br/>
    valor 3: ${value3} <br/>
    `;

    console.timeEnd("Start");
};

const slowPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow promise resolved!");
        }, 2000);
    });
const mediumPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("medium promise resolved!");
        }, 1500);
    });

const fastPromise = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast promise resolved!");
        }, 1000);
    });
