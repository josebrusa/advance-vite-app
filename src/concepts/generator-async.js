import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */

// export const generatorsAsyncComponent = async (element) => {
//     const heroGenerator = getHeroGenerator();

//     do {
//         element.innerHTML = (await heroGenerator.next()).value;
//     } while (!(await heroGenerator.next()).done);
// };

export const generatorsAsyncComponent = async (element) => {
    const heroGenerator = getHeroGenerator();
    let isFinished = false;
    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        element.innerHTML = value;
    } while (!isFinished);
};

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }
    return "no hay mas";
}
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000); // simulate async operation with timeout of 1
    });
};
