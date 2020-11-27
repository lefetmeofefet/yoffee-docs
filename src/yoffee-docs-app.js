import {HTMElement} from "../libs/htmel/htmel.min.js"
import state from "../state.js"
import "./tree-node.js"
import "./components/x-button.js"
import "./components/text-input.js"
import "./components/x-switch.js"
import "./components/x-icon.js"
import "./home-page.js"
import "./docs-page.js"
import "./support-us-page.js"

const PAGES = {
    home: "home",
    docs: "docs",
    supportUs: "support-us"
}

customElements.define("yoffee-docs-app", class extends HTMElement {
    constructor() {
        let urlParams = new URLSearchParams(window.location.search);
        let page = urlParams.get("page");

        super({
            currentPage: page || PAGES.home
        })
    }
    render() {
        return this.html(this.props, this.state, state.tree, state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
    }
    
    #header {
        width: -webkit-fill-available;
        display: flex;
        padding: 10px 21px;
        align-items: center;
        max-height: 44px;
        box-shadow: 0px 0px 3px 0px var(--shadow-color);
        user-select: none; 
    }
    
    #logo {
        display: flex;
        width: 36px;
        height: 36px;
        cursor: pointer;
    }
    
    #title {
        font-size: 22px;
        padding-left: 10px;
        cursor: pointer;
    }
    
    #header > .header-button {
        transition: 300ms;
        color: var(--text-color);
        cursor: pointer;
        padding: 19px 10px;
        margin: 0px 10px;
        font-size: 18px;
        border-bottom: 3px solid #00000000;
    }
    
    #header > .header-button[highlight] {
        border-bottom-color: var(--secondary-color);
        color: var(--secondary-color);
    }
    
    #header > .header-button:hover {
        transition: 300ms;
        color: var(--secondary-color);
    }
    
    #docs-button {
        margin-left: auto !important;
    }
    
    #github-button {
        display: flex;
    }
    
    #github-button > x-icon {
        margin-left: 7px;
    }
    
    #dark-theme-toggle {
        --circle-size: 20px;
    }
    
    #slide-menu-button {
        display: none;
    }
    
    @media (max-width: 800px) {
        #header {
            max-height: 26px;
        }
        
        #header > .header-button {
            font-size: 14px;
            padding: 13px 10px;
        }
        
        #github-button, #title {
            display: none;
        }
    }
</style>

<style>
    @media (max-width: 800px) {
        #logo {
            margin-left: ${() => this.state.currentPage === PAGES.docs ? "20px" : "0"};
            width: 28px;
            height: 28px;
        }
        
        #slide-menu-button {
            display: ${() => this.state.currentPage === PAGES.docs ? "flex" : "none"};
        }
    }
</style>

<div id="header">
    <x-icon id="slide-menu-button" icon="fas fa-bars"
            onclick=${() => () => state.sideMenuOpen = !state.sideMenuOpen}></x-icon>
    <img id="logo" src="yoffee-logo.png" onclick=${() => () => this.state.currentPage = PAGES.home} />
    <div id="title" onclick=${() => () => this.switchPage(PAGES.home)}>Yoffee.js</div>
    
    <div id="docs-button" class="header-button" 
         highlight=${() => this.state.currentPage === PAGES.docs}
         onclick=${() => () => this.switchPage(PAGES.docs)}>
        Docs
    </div>
    <div id="support-us-button" class="header-button" 
         highlight=${() => this.state.currentPage === PAGES.supportUs}
         onclick=${() => () => this.switchPage(PAGES.supportUs)}>
        Support Us ♥
    </div>
    <div id="github-button" class="header-button" 
         onclick=${() => () => this.openGithub()}>
        Github
        <x-icon icon="fab fa-github"></x-icon>
    </div>
    <x-switch id="dark-theme-toggle" 
              value=${() => state.darkTheme}
              switched=${() => () => {
            state.darkTheme = !state.darkTheme;
            document.body.setAttribute("theme", state.darkTheme ? "dark" : "light")
        }}></x-switch>
</div>

${() => {
    if (this.state.currentPage === PAGES.home) {
        return this.html()`<home-page getstarted=${() => () => this.switchPage(PAGES.docs)}
                                      github=${() => () => this.openGithub()}></home-page>`
    } else if (this.state.currentPage === PAGES.docs) {
        return this.html()`<docs-page></docs-page>`
    } else if (this.state.currentPage === PAGES.supportUs) {
        return this.html()`<support-us-page></support-us-page>`
    }
}}

`
    }

    switchPage(page) {
        window.history.replaceState(null, null, `?page=${page}`);
        this.state.currentPage = page;
    }

    openGithub() {
        window.open("https://github.com/lefetmeofefet/yoffee", "_blank")
    }
});