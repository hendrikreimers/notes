import NodeView from "../Note/View/View";

class Container {
    public readonly nodeView: NodeView = new NodeView();
}

const GlobalContainer: Container = new Container();

export default GlobalContainer;