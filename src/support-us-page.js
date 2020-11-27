import {HTMElement} from "../libs/htmel/htmel.min.js"

customElements.define("support-us-page", class extends HTMElement {
    render() {
        return this.html(this.state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
        padding: 40px 22%;
    }
    
    #title {
        padding-bottom: 15px;
    }
    
    #persuation-text {
        margin-bottom: 20px;
    }
    
    #payment-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
    }
    
    #contributors-title {
        padding-top: 20px;
        padding-bottom: 10px;
    }
</style>
<h1 id="title">Support Yoffee.js</h1>
<div id="persuation-text">
    Yoffee.js is a MIT licensed open source project and is completely free to use.
    <br> 
    I hope that Yoffee has made your web programming life a bit more fun, and that you'll buy me a cup of virtual 
    coffee :)
</div>
<div id="payment-options">
    <div class="payment-option">Paypal</div>
    <div class="payment-option">Patreon</div>
    <div class="payment-option">WHATEvER FUCJIKNG</div>
</div>
<h2 id="contributors-title">Contributors</h2>
<div>
    I AM CONTRIBUTORS LIST
</div>
        `
    }
});