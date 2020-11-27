import {HTMElement} from "../../libs/htmel/htmel.min.js"

class BaseDoc extends HTMElement {
    render() {
        return this.html(this.state)`
<link href="doc-style.css" rel="stylesheet">
<style>
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: inherit;
    }
</style>
${() => this.renderDoc()}
        `
    }
}

export default BaseDoc