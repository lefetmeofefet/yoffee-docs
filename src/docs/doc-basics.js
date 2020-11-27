import BaseDoc from "./base-doc.js";

customElements.define("doc-basics", class extends BaseDoc {
    renderDoc() {
        return this.html()`
<h1>Introduction</h1>
<h2>Introduction</h2>
<p></p>


<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/90h36g1L/3/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
        `
    }
});
