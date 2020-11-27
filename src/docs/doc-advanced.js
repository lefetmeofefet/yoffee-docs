import BaseDoc from "./base-doc.js";

customElements.define("doc-advanced", class extends BaseDoc {
    renderDoc() {
        return this.html()`

        `
    }
});