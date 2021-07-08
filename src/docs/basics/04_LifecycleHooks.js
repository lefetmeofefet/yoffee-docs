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

\`onConnect\` and \`onDisconnect\` are the same as \`connectedCallback\` and \`disconnectedCallback\` 
in [custom elements specification](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)


Note that \`onConnect\` is invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.

`