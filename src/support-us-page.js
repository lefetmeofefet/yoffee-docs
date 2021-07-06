import {YoffeeElement, createYoffeeElement, html} from "../libs/yoffee/yoffee.min.js";

createYoffeeElement("support-us-page", class extends YoffeeElement {
    render() {
        return html(this.state)`
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
    Yoffee.js is a free library and it will remain free. 
    However, maintaining and improving the library costs time and money.
    <br> 
    I hope that Yoffee has made your web programming life a bit more fun, and that you'll buy me a cup of Coffee.js :)
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