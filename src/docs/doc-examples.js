import BaseDoc from "./base-doc.js";

customElements.define("doc-examples", class extends BaseDoc {
    renderDoc() {
        return this.html()`

        `
    }
});