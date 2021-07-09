import {YoffeeElement, createYoffeeElement, html} from "../libs/yoffee/yoffee.min.js";

createYoffeeElement("support-us-page", class extends YoffeeElement {
    render() {
        return html(this.state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
        padding: 40px 12%;
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
        /*justify-content: space-between;*/
        justify-content: center;
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
    I hope that Yoffee has made your webdev life a bit better, and that you'll buy me a cup of Coffee.js :)
</div>
<div id="payment-options">
    <div class="payment-option">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="S5H8KFYE3PKJG" />
            <input type="image" src="https://www.paypalobjects.com/en_US/IL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
        </form>
    </div>
<!--    <div class="payment-option">Patreon</div>-->
</div>
<h2 id="contributors-title">Sponsors</h2>
<div>
    I AM SPONSORS LIST
</div>
        `
    }
});