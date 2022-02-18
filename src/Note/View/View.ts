

// @todo export interfaces in single file
import Model from "./Model";

interface Component {
    mount(): ShadowRoot;
}

export default class View extends HTMLElement implements Component{
    private modelInstance: Model|undefined;

    set model(value: Model) {
        this.modelInstance = value;
    }

    public mount(): ShadowRoot {
        const shadowRoot: ShadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.innerHTML = this.render();

        return shadowRoot;
    }

    private render(): string {
        const model: Model = this.modelInstance as Model;

        return `
          <h1>Hello ${model.name}</h1>
        `;
    }
};

customElements.define('node-view', View);