import {HTMElement} from "../libs/htmel/htmel.min.js"
import "./components/x-button.js"
import "./components/x-icon.js"

customElements.define("tree-node", class extends HTMElement {
    render() {
        return this.html(this.props.node, this.state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        width: 100%;
    }
    
    #node-title {
        display: flex;
        align-items: center;
        border-radius: 0;
        box-shadow: none;
        width: -webkit-fill-available;
        justify-content: flex-start;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: ${() => this.props.depth * 15}px;
        cursor: pointer;
    }
    
    #node-title:hover {
        background-color: #ffffff06;
    }
    
    text-input#name {
        --background-color: #00000000;
        --padding: 0;
        font-size: inherit;
        width: -webkit-fill-available;
        min-width: 0;
        margin-right: 6px;
    }
    
    #open-icon {
        color: var(--text-color-weak-2);
        width: 20px;
        min-width: 20px;
        height: 20px;
        font-size: 10px;
    }
    
    #open-icon[rotated] {
        transform: rotate(90deg);
    }
    
    #add-button {
        color: var(--secondary-color);
        margin-left: auto;
    }
    
    #delete-button {
        color: darkred;
        margin: 0 6px;
    }
    
    .action-button {
        padding: 4px;
        width: 20px;
        min-width: 20px;
        height: 20px;
        border-radius: 100px;
        box-shadow: none;
        opacity: 0;
    }
    
    #node-title:hover > .action-button {
        opacity: 1;
    }
    
    #children {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>

<!--We use different style tag because the whole tag is overwritten when changing childs length-->
<style>
    #open-icon {
        visibility: ${() => this.props.node.children.length === 0 ? "hidden" : "inherit"};
    }
</style>

<div id="node-title" onclick=${() => {
            if (this.props.node.children.length > 0) {
                this.props.node.opened = !this.props.node.opened
            }
        }}>
    <x-icon id="open-icon" 
            icon="fas fa-chevron-right"
            rotated=${() => this.props.node.opened}></x-icon>    
    <text-input id="name"
                onclick=${e => e.stopPropagation()}
                placeholder="Untitled" 
                value=${() => this.props.node.name}
                keyup=${() => () => this.nameChanged()}
                ></text-input>
    <x-button id="add-button" class="action-button"
              onclick=${e => this.addChild(e)}>
          <x-icon icon="fa fa-plus"></x-icon>
    </x-button>
    <x-button id="delete-button" class="action-button"
              onclick=${e => {
            e.stopPropagation();
            this.props.deleteclicked();
        }}>
          <x-icon icon="fas fa-trash-alt"></x-icon>
    </x-button>
</div>

${() => this.props.node.opened && this.html()`
<div id="children">
    ${() => this.props.node.children.map((child, index) => this.html()`
        <tree-node node=${() => child}
                   treeedited=${() => (action, path) => this.props.treeedited(action, [index, ...path])}
                   depth=${() => parseInt(this.props.depth) + 1}
                   deleteclicked=${(() => () => this.deleteChild(child, index))}></tree-node>
    `)}
</div>
`}
`
    }

    addChild(e) {
        e.stopPropagation();
        if (this.props.depth > 17) {
            alert("די כבר");
            return;
        }

        // Send message to all peers
        this.props.treeedited({
            type: "add",
            value: null
        }, [])

        // Perform local add
        this.props.node.children = [...this.props.node.children, {
            name: null,
            children: []
        }];
        this.props.node.opened = true;
    }

    deleteChild(child, index) {
        // Send message to all peers
        this.props.treeedited({
            type: "delete",
            value: null
        }, [index])

        // Perform local delete
        this.props.node.children = this.props.node.children.filter(c => c !== child)
    }

    nameChanged() {
        let newName = this.shadowRoot.querySelector("#name").getValue();

        // Send message to all peers
        this.props.treeedited({
            type: "update",
            value: newName
        }, [])

        // Perform local update
        this.props.node.name = newName;
    }
});