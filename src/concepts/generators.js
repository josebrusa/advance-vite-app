/**
 *
 * @param {HTMLDivElement} element
 */

export const generatorFunctionComponents = (element) => {
    // const myGenerator = myFirstGeneratorFunction();

    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const genId = idGenerator();
    const btn = document.createElement("button");
    btn.innerText = "Click me";
    element.append(btn);

    const renderBtn = () => {
        const { value } = genId.next();
        btn.innerText = `Click ${value}`;
    };

    btn.addEventListener("click", () => renderBtn());
};

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield "Primer valor";
    yield "Segundo valor";
    yield "Tercer valor";
    yield "Cuarto valor";
    return "ya no hay valores";
    yield "Ya no e pueden leer valores";
}
