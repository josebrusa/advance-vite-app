/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {
    element.innerHTML = "Loading ...";
    const renderValue = (value) => {
        element.innerHTML = value;
    };

    Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
        renderValue
    );
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
