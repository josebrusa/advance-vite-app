/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {
    element.innerHTML = "Loading ...";
    const renderValue = (value) => {
        element.innerHTML = value;
    };

    Promise.race([
        slowPromise(),
        midiumPromise(),
        midiumPromise(),
        fastPromise(),
        midiumPromise(),
    ]).then(renderValue);
    console.log(renderValue);
};

const slowPromise = (value) =>
    new Promise((resolve) => {
        setTimeout(resolve, 2000, "slow promise");
    });

const midiumPromise = (value) => {
    new Promise((resolve) => {
        setTimeout(resolve, 1500, "medium promise");
    });
};

const fastPromise = (value) => {
    new Promise((resolve) => {
        setTimeout(resolve, 1500, "fast promise");
    });
};
