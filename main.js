import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import { enviromentsComponent } from "./src/concepts/enviroment";
// import { callbacksComponent } from "./src/concepts/callbacks";
// import { promiseComponent } from "./src/concepts/promises";
// import { promiseRaceComponent } from "./src/concepts/promise-race";
// import { asyncComponent } from "./src/concepts/async";
// import { asyncAwaitComponent } from "./src/concepts/asyncAwait";
// import { asyncAwaitNoSecuencial } from "./src/concepts/asyncAwaitNoSecuencial.js";
// import { forAwaitComponent } from "./src/concepts/for-await";
import { generatorFunctionComponents } from "./src/concepts/generators";
import { generatorsAsyncComponent } from "./src/concepts/generator-async";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;

const element = document.querySelector(".card");
// callbacksComponent(element);
// promiseComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwaitNoSecuencial(element);
// forAwaitComponent(element);
// generatorFunctionComponents(element);
generatorsAsyncComponent(element);
