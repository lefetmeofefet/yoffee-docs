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
`