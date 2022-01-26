export default `
# Accessing DOM, Functions and Properties
A Yoffee element creates an actual html element. A reference to that "self" element is the second parameter to the 
callback function sent to \`createYoffeeElement\`.

The element reference is useful for accessing and manipulating the element's DOM by JS, and defining properties and functions.

<br><br>
## Defining Functions
You can define functions on a yoffee element, so they could be called from outside.

\`\`\`js
createYoffeeElement("element-with-function", (props, element) => {
    element.iAmFunction = () => console.log("Doing something...")
    return html(props)\`...\`
})
\`\`\`

Now when we access \`element-with-function\` by code, we can call \`iAmFunction()\` on it. 

<br><br>
## Accessing DOM
\`\`\`js
createYoffeeElement("i-am-textfield", (props, element) => {
    let value = element.shadowRoot.querySelector("input").value
    return html(props)\`<input type="text"></input>\`
})
\`\`\`

In this example we read the value of the text input.

<br><br>
### Combining both examples
\`\`\`js
createYoffeeElement("i-am-textfield", (props, element) => {
    element.getValue = () => element.shadowRoot.querySelector("input").value
    return html(props)\`<input type="text"></input>\`
})
\`\`\`
Now whoever uses \`i-am-textfield\` can call \`getValue()\` and get the text field value.
`