export default `
# Lifecycle Hooks
There are three hooks in yoffee:
* **onPropUpdate** - when an outside attribute is updated, onPropUpdate is called with the name of the attribute
* **onConnect** - when the element is connected to the DOM
* **onDisconnect** - when the element is disconnected from the DOM

Usage:
\`\`\`js
createYoffeeElement("some-element", (props, element) => {
    element.onPropUpdate = prop => console.log("Prop updated: ", prop)
    element.onConnect = () => console.log("Connected")
    element.onDisconnect = () => console.log("Disonnected")

    return html(props, state)\`...\`
})
\`\`\`

The hooks are set as functions on the element referenc - the second parameter sent to the render function.


\`onConnect\` and \`onDisconnect\` are the same as \`connectedCallback\` and \`disconnectedCallback\` 
in [custom elements specification](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)


Note that \`onConnect\` is invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

## Accessing DOM
It is possible to access the DOM of the element by using the reference to the element that we get in the render function.
Example:
\`\`\`js
createYoffeeElement("some-element", (props, element) => html()\`
    <button onclick=${() => element.shadowRoot.querySelector("#text-input").value = "text"}>
        Click to set text
    </button>
    <input id="text-input"></input>
\`)
\`\`\` 

`