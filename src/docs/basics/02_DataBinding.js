export default `
# Data Binding
Yoffee provides a way to update an element by binding it to a state object. 
When a property on the state object changes, yoffee automatically updates only the relevant part of the element:

<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/6c7ovnuk/13/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

In the above example, when \`state.text\` changed, \`yoffee\` modified the div's content.


The function \`html\` is the core of Yoffee: it creates a data-bound DOM Element. Its arguments are the state objects, 
and when relevant properties of state objects change, the created DOM Element is updated.
In this example, we pass \`state\` to \`html\`, so it is our state object. We have two expressions inside the HTML code,
one is a callback handler and the other is a simple text. The callback handler updates \`state.clicks\`, 
and when it's changed, the element is updated because the text expression "depends" on the \`clicks\` property. 


_Notice that we used an arrow function \`() => state.text\` instead of 
just \`state.text\`. When using state's properties, always use arrow
functions, otherwise \`yoffee\` won't update the template._

<br><br>
## How to bind?
The following describes what parts of the html code can be bound, and how.

<br><br>
Text
\`\`\`js
\`<div> 
    \${() => state.text} some text between, \${() => state.moreText}
</div>\`
\`\`\`

<br><br>
Conditionals
\`\`\`js
\`<div>
    \${() => state.a ? "a" : "b"}
    \${() => state.condition && "am i here?"}
</div>\`
\`\`\`

<br><br>
CSS
\`\`\`js
\`<style> 
    #my-element {
        color: \${() => state.color};
    }
</style>\`
\`\`\`

<br><br>
Events
\`\`\`js
\`<button onclick=\${() => state.a += 1}>
    \${() => state.a}
</button>\`
\`\`\`

<br><br>
Attributes
\`\`\`js
\`<div dir=\${() => state.dir}>what is my direction?</div>\`
\`\`\`

<br><br>
Attribute names
\`\`\`js
\`<div \${() => state.attrName}>i have some attr</div>\`
\`\`\`

<br><br>
Attribute dict
\`\`\`javascript
let state = {
    inputAttrs: {
        dir: "left",
        placeholder: "i am placeholder"
    }
}
html()\`<input \${() => state.inputAttrs}></input>\`
\`\`\`

<br><br>
Nesting template (HTML element) inside a template:
\`\`\`javascript
let state = {
    someInsideData: {name: "old name"}
}

let element = html(state)\`
<div>
    I have other elements inside of me
    \${() => html(state.someInsideData)\`
        <div>\${() => state.someInsideData.name}</div>
    \`}
</div>
\`;

// Modify prop of inner template
state.someInsideData.name = "new name"

// Modify whole inner template (prop of outer template)
state.someInsideData = {name: "new name"}
\`\`\`

<br><br>
List of elements:
\`\`\`javascript
let state = {
    items: [{
        name: "Mojojojo"
    }, {
        name: "harambe"
    }]
};

let element = html(state)\`
<div>
\${() => state.items.map(item => html(item)\`
    <div>\${() => item.name}</div>
\`)}
</div>
\`;

// Modify prop of specific item
state.items[0].name += "s";

// Modify the whole list
state.items = [{name: "new name"}, {name: "another"}]
\`\`\`

<br><br>
A single expression can contain multiple properties:
\`\`\`javascript
\`<div>\${() => state.a + state.b}</div>\`
\`\`\`

<br><br>
A single dom node can contain multiple expressions - here we see style attribute node:
\`\`\`javascript
\`<div style="color:\${() => state.color}; width:\${() => state.width}px;">\`
\`\`\`

<br><br>
Multiple states in single \`yoffee\` template:
\`\`\`javascript
html(state1, state2)\`
<div>
    \${() => state1.text}
    \${() => state2.text}
</div>
\`;
state1.text = "i am text"
state2.text = "i am some other unrelated text"
\`\`\`

<br><br>
Multiple templates with one state (good for displaying global state):
\`\`\`javascript
html(state)\`
<div>text is \${() => state.text}</div>
\`
html(state)\`
<div>\${() => state.text} is text</div>
\`
;
state.text = "life"
\`\`\`

<br><br>
Comprehensive features example:
\`\`\`javascript
import {html} from "https://unpkg.com/yoffee@latest/dist/yoffee.min.js"

window.state = {
        name: "Inigo Montoystory",
        color: "red",
        age: 3,
        clicks: 1,
        placeholder: "this is hint",
        amAlive: true
    };
    window.innerState = {
        deathColor: "blue"
    };
    window.secondState = {
        age: 10
    }

    let element = html(state, secondState)\`
<div>
    My name is <span style="color: \${() => state.color}">
        \${() => state.name}
    </span>

    <div>i will live \${() => state.age + 1}ever</div>
    <div>second state age is  \${() => secondState.age} yars</div>
    <div>i am \${"static"}</div>

    <button onclick=\${() => state.clicks += 1}>
        click me baby \${() => state.clicks} more time
    </button>

    <style>
     #thing {
        color: \${() => state.color};
     }
    </style>
    <div id="thing">colorful things</div>

    <input placeholder=\${() => state.placeholder}>

    <div>
        \${() => state.amAlive ? "yes" : html(innerState)\`
            <span style="color: \{() => innerState.deathColor}; font-size: \${() => innerState.deathColor === "blue" ? "40px" : "13px"};">NO</span>\`}
    </div>
</div>
\`;

    // element is a regular html element
    document.body.appendChild(element);

    // modifying the state
    state.name = "John Cena!!!";

    // switching the color
    setInterval(() => state.color = state.color === "blue" ? "red" : "blue", 500);
\`\`\`
Try it live on [JSFiddle](https://jsfiddle.net/Numbnut/90h36g1L/4/)

`