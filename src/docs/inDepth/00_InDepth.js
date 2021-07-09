export default `
# Deep Dive
In this section we will dive into how <b>Yoffee</b> works, and highlight what makes it different than any other UI 
library out there.

## Mechanism overview
Yoffee creates data-bound DOM component. Yoffee also knows which property of the state object corresponds to which 
expression in the element declaration, and then to which DOM node. This creates a clear pipeline of updating:
* A property is set
* It's corresponding expressions are rerun
* The outputs of the expressions are inserted into the DOM where they should

How is this state achieved? First let's see what happens when \`html\` is called.
\`html\` receives a list of state objects and a string template literal, which contains expression callbacks. The workflow: 

0. The state objects's properties are replaced with getters / setters. Yoffee now knows when a property is accessed / set on any state object.
0. We determine whether the yoffee template should be created right now or deferred for possible caching (later on that)
1. Create a DocumentFragment that will represent the yoffee template (it will contain elements, reference listeners, etc.)
2. Create HTML string from the template literal: generate an ID for each expression and replace the expressions in the template with those IDs.
3. Create a HTMLUnknownElement element that contains the previously generated HTML string. It's not connected to the DOM.
4. Bind nodes to expressions: find the DOM nodes that contain the expressions in the HTMLUnknownElement DOM using the previously generated IDs.
   We need the HTMLUnknownElement to search because xpath root has to be an Element (not DocumentFragment)
5. Perform first render: execute each expression while collecting the state object's properties that were accesed inside, and insert the return value
   into the DOM Node where the expression ID was. When the state object's setter is invoked, we check whether the property is bound
   to any expression, and if so, the expression is executed and DOM Node is updated, and new properties are collected on the way again.
6. Move all children of the container element into the DocumentFragment created earlier, and return the fragment.

When executing an expression, we know which props were used in the expression thanks to the watchers we set earlier.
This is how the update pipeline is set-up.

## Lifecycle
Yoffee.js doesn't really have a lifecycle.
It's more of a two stage process:
1. Yoffee template initialization
2. Updates to state, causing rerenders

## An Example
Consider the following example:
\`\`\`javascript
html(state)\`
<div id="parent">
    <div id="child">${() => state.content}</div>
</div>
\`;
state.content = "new content"
\`\`\`

when the last line is called, \`yoffee\` only updates \`#child\`'s content, by rerunning
the expression \`() => state.content\`.
\`yoffee\` does several things to make that possible: 
* Wrap state object with setters and getters
    * Setters notify \`yoffee\` that \`content\` property has changed and should be rerendered. 
    (when \`state.content = "new content"\` is called)
    * Getters allow us to know which property corresponds to which expression in 
    the html: when \`() => state.content\` is called, the getter for \`content\` is 
    called, letting \`yoffee\` know that \`content\` property corresponds to that 
    expression.
* Analyze the resulting HTML element to keep a reference to each of the nodes containing 
expressions. For example, \`yoffee\` keeps a reference to the \`#child\`'s TextNode
which will be changed when \`content\`'s setter is called. It does so by inserting 
randomly generated IDs into the expressions, the then finding them.


## \`createYoffeeElement\` /  YoffeeElement
\`createYoffeeElement\` provides a way to create Custom Dom Elements with Yoffee.JS at their core.

### Attributes into properties
\`createYoffeeElement\` receives the props object as the first parameter, which contains all the attributes. 
On initialization it's populated by all the attributes, and is kept updated by listening to attribute changes using MutationObserver.

Object attributes are converted to "__obj_placeholder__" by yoffee.js, in order not to be overriden, and they are set as a property on the element. 

### Shadow DOM
Yoffee elements wrap their content with a shadowRoot so CSS doesn't leak and HTML is encapsulated.

### Hooks
* \`onPropUpdate\` Called when an attribute is changed, receives the name of the changed prop
* \`onConnect\` / \`onDisconnect\` Called when the element is attached to the DOM, as per [Custom Dom Elements documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)

## Further work
Work on Yoffee continues. At the moment, the most important things that are being taken care of are:
- Elements library
- Better documentation
- More Code Reviews

Feel free to mail us at davidgdalevich7@gmail.com about anything - suggestions, typos, CR's, collaboration requests.
`