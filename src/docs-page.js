import {HTMElement} from "../libs/htmel/htmel.min.js";
import state from "../state.js"
import "./docs/doc-basics.js"
import "./docs/doc-advanced.js"
import "./docs/doc-comparison.js"
import "./docs/doc-examples.js"

customElements.define("docs-page", class extends HTMElement {
    connectedCallback() {

    }

    render() {
        return this.html(this.state, state)`
<link href="./src/style/scrollbar-style.css" rel="stylesheet">
<style>
    :host {
        position: relative;
        display: flex;
        flex-direction: row;
        height: inherit;
        overflow: hidden;
    }
        
    #side-menu {
        display: flex;
        flex-direction: column;
        width: 240px;
        min-width: 240px;
        box-shadow: 0px 3px 3px 0px var(--shadow-color);
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 30px;
        align-items: baseline;
        font-size: 14px;
    }
    
    #side-menu {
        transition: 400ms;
        margin-left: -240px;
    }
    
    #side-menu[open] {
        transition: 400ms;
        margin-left: 0;
        z-index: 100;
    }
    
    #doc-content {
        width: 100%;
        transition: 400ms;
        opacity: 1;
        padding: 30px;
    }
    
    #doc-content[overlayed] {
        transition: 400ms;
        opacity: 0;
    }
    
    @media (max-width: 800px) {
        #side-menu {
            position: absolute;
        }
    }
    
</style>

<div id="side-menu" open=${() => state.sideMenuOpen}>
    ${() => state.tree.children.map((node, index) => this.html()`
    <tree-node node=${() => node}
               depth=${0}>           
    </tree-node>
    `)}
</div>

<div id="doc-content" overlayed=${() => state.sideMenuOpen && window.innerWidth < 800}>
        ${() => {
            if (state.docNode.name === "Basics") {
                return this.html()`<doc-basics></doc-basics>`
            } else if (state.docNode.name === "Advanced") {
                return this.html()`<doc-advanced></doc-advanced>`
            } else if (state.docNode.name === "Comparison") {
                return this.html()`<doc-comparison></doc-comparison>`
            } else if (state.docNode.name === "Examples") {
                return this.html()`<doc-examples></doc-examples>`
            }
        }}
</div>

        `
    }
});