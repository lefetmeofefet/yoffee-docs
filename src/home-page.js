import {YoffeeElement, createYoffeeElement, html} from "../libs/yoffee/yoffee.min.js";
import "./mark-down.js"


const description = `
<b>Yoffee.js</b> is a reactive UI library for creating web components and easily updating their content.

* <b>Fast</b> - yoffee only reruns expressions that were changed, and only updates the dynamic parts of the UI. No virtual DOM diffing. No virtual DOM at all. 
* <b>Straighforward</b> - Just plain HTML, no special syntax to learn.
* <b>Lightweight</b> - No build steps required. Write once, use anywhere.
* <b>Web Components</b> - Yoffee uses web components to create brand new, reusable elements. CSS is scoped by using Shadow DOM.

<br>
## A Quick Look
\`\`\`html
<script type="module">
    import {html, createYoffeeElement} from "https://unpkg.com/yoffee@latest/dist/yoffee.min.js"
    
    createYoffeeElement("counter-button", () => {
        const state = {
            clicks: 0
        }
        
        return html(state)\`
            <button onclick=\${() => state.clicks += 1}>
                I've been clicked \${() => state.clicks} times
            </button>
        \`
    })
</script>
<counter-button></counter-button>
\`\`\`

Play with the example at [JSFiddle](https://jsfiddle.net/Numbnut/6c7ovnuk/11/)
<br>
# Why Yoffee.js?
<b>Yoffee</b> does one thing and does it well: Reactive web components, much like some modern UI libraries.
<br> 
<b>Yoffee</b> stands out from competitors in two major aspects:
* <b>Unopinionated</b> - you're writing pure html, no directives or special characters for attribute types
* <b>Render once, and minimize evaluations</b> - when updating, only relevant expressions will re-evaluate, and only the relevant DOM node will update.

You can read about comparisons with major frameworks [here](${window.location.origin + window.location.pathname}?page=docs&doc=Comparisons) 


<br>
## Our Philosophy
<b>Yoffee.js</b> was created because there was a need for a minimal and efficient one way binding library. 
We felt that other libraries compromised on aspects we wanted to optimise, so we created one ourselves, with the following guidelines:
* Unopinionated - No special syntax, just plain HTML
* Works out of the box - No build steps 
* No virtual DOM - work with real DOM to make outside updates "legit", and to feel less like a framework
* Reactive - One way binding with minimum expression execution
* Web components and scoped styles

Yoffee will remain open source forever, which brings us to the next section:

<br>
## Contribute!
If you like this project and you have ideas on how to make it better, feel free to send us an email at 
davidgdalevich7@gmail.com, and we'll gladly collaborate! 

<br>
## Acknowledgemenets
This site was written using:
* <b>highlight.js</b>
* <b>showdown.js</b>
* <b>swiped-events.js</b>
* And finally, <b>Yoffee.js</b>

Thanks for all the open sauce, and keep rocking!
`

createYoffeeElement("home-page", class extends YoffeeElement {
    render() {
        return html(this.state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
        align-items: center;
        overflow-y: auto;
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
    
    #description-container {
        display: flex;
        padding: 40px 40px;
        max-width: 800px;
        width: -webkit-fill-available;
    }
    
</style>
<div id="title-block-container">
    <img id="logo" src="res/yoffee-logo.png"/>
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
<div id="description-container">
    <mark-down markdown=${() => description}></mark-down>
</div>

        `
    }
});