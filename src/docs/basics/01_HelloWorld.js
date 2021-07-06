export default `
# Hello World!
The smallest Yoffee example looks like this:

\`\`\`html
<script type="module">
    import {html, createYoffeeElement} from "https://unpkg.com/yoffee@latest/dist/yoffee.min.js"
    createYoffeeElement("hello-world", () => html()\`<div>Hello World!</div>\`)
</script>
<hello-world></hello-world>
\`\`\`

Try it on [JSFiddle](https://jsfiddle.net/Numbnut/xmu902Lq/)

\`createYoffeeElement\` receives two arguments:
* Element name
* Callback returning the element's content

The callback uses the function \`html\`, which is a [tagged template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
The html code after calling \`html\` becomes a DOM Element, and that is returned to Yoffee, which turns it into a web component.
As a result, we have a \`hello-world\` component. 
`