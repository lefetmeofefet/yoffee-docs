import {YoffeeElement, createYoffeeElement, html} from "../libs/yoffee/yoffee.min.js";

createYoffeeElement("thank-you-page", class extends YoffeeElement {
    render() {
        return html(this.state)`
<style>
    :host {
        display: flex;
        flex-direction: column;
        height: inherit;
        padding: 40px 18%;
    }
    
    #title {
        padding-bottom: 15px;
    }
    
    #thanks-text {
        margin-bottom: 20px;
    }
</style>
<h1 id="title">Thank you, dear internet friend!</h1>
<div id="thanks-text">
    Thank you, you've probably made my day :)
    I'll contact you soon so you could send me your logo and i'll add it to the list of sponsors on the site.
    Have a great day!
</div>
        `
    }
});