export default `
# Comparisons
In this section we will list the major differences between <b>Yoffee</b> and major web libraries / frameworks.
We'll try to be as objective as possible, however, a bias is unavoidable, so feel free to contact us about any inaccuracies.

<br>
## React
A notable difference between React and Yoffee is the usage of virtual DOM. 
React has a representation of the DOM with which the code interacts, but it's not the actual DOM - hence virtual DOM.
When the virtual DOM is updated at a certain node, react compares the subtree from that node to the actual DOM, and 
updates the diff.

This yields some interesting qualities:
* Actual DOM changes are minimized
* A lot of DOM-comparison calculations could be slow
* The whole render function is being rerun at every update, and all of the component subtree is being re-rendered and compared.

Yoffee uses a different mechanism. Instead of using a virtual DOM representation, it saves references to the dynamic DOM 
nodes which are bound to data, and when the data updates, only the relevant expressions are being re-run, and only relevant
DOM nodes are updated.
In other words, a Yoffee component’s dependencies are automatically tracked during its render, so the system knows which expressions and DOM nodes actually need to re-render when state changes.

Which means:
* Actual DOM changes could be larger because new DOM could be same as old DOM
* No extra overhead: the render function doesn't run again, only the relevant expressions

To better grasp the different mechanisms and their pros and cons, consider the following example in React:
<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/dwc7az8j/20/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
And in Yoffee: 
<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/5zr0bgnf/23/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

There's some notable differences, and many more subtle differences. The notable ones include:
* <b>Boilerplate:</b> React requires JSX, yoffee runs natively
* <b>Web Compatability:</b> React created a React Component, usable only in React. Yoffee created a web component, usable anywhere.
* <b>Performance:</b> Each time the button is pressed, in React the whole render function runs and all the expressions are executed. In Yoffee however, only the relevant ones are executed: color should never be calculated more than once.

<br>
### Redux?
React requires third party libraries or some special logic for controlling element state from outside. 

In yoffee, it's dead simple:
\`\`\`
let AppState = {theme: "dark"}

createYoffeeElement("some-element", props => html(props, AppState)\`
    <div color="\${() => AppState.theme === "dark" ? "white" : "black"}">
        Hello World!
    </div>
\`)
\`\`\`

The global state \`AppState\` is being treated like a regular state object. 
A state object can be shared between multiple Yoffee elements.

<br>
## Vue
In React, when a component’s state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root.
In Vue, much like in Yoffee, a component’s dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes.
This is where Vue and Yoffee are similar. 

The differences however are significant:
- Vue uses a virtual DOM like react. Yoffee keeps references and updates DOM surgically.
- Vue uses special directives like \`v-if\`, \`v-for\` and \`v-bind\`. Yoffee allows JS expressions with conditions and loop. It's a matter of technical taste.  

<br>
## Lit-Element and lighterhtml
*Coming soon* 

`