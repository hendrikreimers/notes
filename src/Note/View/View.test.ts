import View from "./View";
import Model from "./Model";

describe(View, function () {
    let view: View,
        model: Model
    ;

    beforeEach(function () {
        view = new View();
        model = new Model();
    })

    function createUi(): ShadowRoot {
        const div = document.createElement('div')
        view.model = model;

        div.appendChild(view);
        return view.mount();
    }

    it('should show hello world', function () {
        model.name = 'test::name:';
        const container: ShadowRoot = createUi();

        expect(container.innerHTML).toContain("Hello test::name:");
    });
});