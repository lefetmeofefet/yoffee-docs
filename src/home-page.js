import {HTMElement} from "../libs/htmel/htmel.min.js";

customElements.define("home-page", class extends HTMElement {
    render() {
        return this.html(this.state)`
<link href="./src/style/scrollbar-style.css" rel="stylesheet">
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
        align-items: center;
    }
    
    #title-block-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 700px;
        padding-top: 100px;
    }
    
    #logo {
        width: 240px;
        padding-right: 40px;
    }
    
    #title-text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    #title-text {
        font-size: 66px;
        font-weight: bold;
        color: var(--secondary-color);
        padding-bottom: 20px;
    }
    
    #title-description {
        font-size: 24px;
        padding-bottom: 28px;
    }
    
    #buttons-container {
        display: flex;    
    }
    
    #get-started-button {
        font-size: 20px;
        padding: 16px 19px;
        background-color: var(--secondary-color);
        margin-right: 20px;
    }
    
    #github-button {
        font-size: 20px;
        padding: 16px 19px;
        background-color: var(--text-color-weak-3);
    }
    
    #github-button > #github-icon {
        margin-left: 10px;
    }
    
    @media (max-width: 800px) {
        #title-block-container {
            flex-direction: column;
            width: 350px;
            padding-top: 50px;
        }
        
        #logo {
            width: 140px;
            padding-right: 0;
            padding-bottom: 20px;
        }
        
        #title-text-container {
            align-items: center;
        }
        
        #title-text {
            font-size: 42px;
        }
        
        #title-description {
            text-align: center;
        }
        
        #buttons-container {
            flex-direction: column;
            align-items: center;
        }
        
        #get-started-button {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
    
</style>
<div id="title-block-container">
    <img id="logo" src="yoffee-logo.png"/>
    <div id="title-text-container">
        <div id="title-text">Yoffee</div>
        <div id="title-description">Robust library for building user interfaces</div>
        <div id="buttons-container">
            <x-button id="get-started-button" onclick=${() => () => this.props.getstarted()}>Get Started</x-button>
            <x-button id="github-button" onclick=${() => () => this.props.github()}>
                Github
                <x-icon id="github-icon" icon="fab fa-github"></x-icon>
            </x-button>
        </div>
        
    </div>
</div>
<div></div>


        `
    }
});