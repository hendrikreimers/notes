import Container from "./DependencyInjection/Container";
import View from "./Note/View/View";
import Model from "./Note/View/Model";


const div = document.createElement('div')
const node: View = Container.nodeView;

const model = new Model();
model.name = window.location.search.substring(1);
node.model = model;

div.appendChild(node);
node.mount();

document.body.appendChild(div);
