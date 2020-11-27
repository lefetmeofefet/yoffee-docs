import BaseDoc from "./base-doc.js";

customElements.define("doc-comparison", class extends BaseDoc {
    renderDoc() {
        return this.html()`

        `
    }
});