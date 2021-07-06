import {YoffeeElement, createYoffeeElement, html} from "../libs/yoffee/yoffee.min.js";
import state from "./state.js"
import "./mark-down.js"

createYoffeeElement("docs-page", class extends YoffeeElement {
    render() {
        return html(this.state, state)`
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
        height: -webkit-fill-available;
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
        padding: 7%;
        overflow-y: auto;
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
    ${() => state.tree.children.map((node, index) => html()`
    <tree-node node=${() => node}
               depth=${0}>           
    </tree-node>
    `)}
</div>


<div id="doc-content" overlayed=${() => state.sideMenuOpen && window.innerWidth < 800}>
    <mark-down markdown=${() => state.selectedNode.doc}></mark-down> 
</div>
        `
    }
});
