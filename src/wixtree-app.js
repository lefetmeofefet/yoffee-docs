import {HTMElement} from "../libs/htmel/htmel.min.js"
import state from "../state.js"
import "./tree-node.js"
import "./components/x-button.js"
import "./components/text-input.js"
import "./components/x-loader.js"

customElements.define("wixtree-app", class extends HTMElement {
    render() {
        return this.html(this.props, this.state, state.tree)`
<link href="./src/style/scrollbar-style.css" rel="stylesheet">
<style>
    :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: inherit;
    }
    
    #categories-panel {
        width: 400px;
        height: 100%;
        box-shadow: 1px 0px 3px 0px #1a1a1a;
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    #title-container {
        display: flex;
        align-items: center;
        padding: 15px;
        color: var(--text-color-weak-1);
    }
    
    .action-button {
        padding: 4px;
        margin-left: 10px;
        width: 20px;
        height: 20px;
        border-radius: 100px;
    }
    
    #add-category-button {
        color: var(--secondary-color)
    }
    
    #categories-list {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        font-size: 14px;
    }
    
    x-loader {
        margin-top: 20%;
        font-size: 50px;
    }
</style>

<div id="categories-panel">
    <div id="title-container">
        <div>Categories</div>
        <x-button id="add-category-button" class="action-button"
                  onclick=${() => this.addCategoryClicked()}>
              <x-icon icon="fa fa-plus"></x-icon>
        </x-button>
        <x-button id="load-button" class="action-button"
                  onclick=${() => this.loadTree()}>
              <x-icon icon="fas fa-cloud-download-alt"></x-icon>
        </x-button>
        <x-button id="save-button" class="action-button"
                  onclick=${() => this.saveTree()}>
              <x-icon icon="fas fa-cloud-upload-alt"></x-icon>
        </x-button>
    </div>
    
        ${() => this.state.loading ?
            this.html()`<x-loader loading></x-loader>`
            :
            this.html()`
            <div id="categories-list">
                ${() => state.tree.children.map((node, index) => this.html()`
                <tree-node node=${() => node}
                           treeedited=${() => () => console.log("TREE WAS EDITED LOL")}
                           depth=${0}
                           deleteclicked=${(() => () => this.deleteClicked(node, index))}>           
                </tree-node>
                `)}
            </div>
            `
        }
    
</div>
`
    }

    addCategoryClicked() {
        state.tree.children = [...state.tree.children, {
            name: null,
            children: []
        }];
    }

    deleteClicked(node, index) {
        state.tree.children = state.tree.children.filter(c => c !== node);
    }
});