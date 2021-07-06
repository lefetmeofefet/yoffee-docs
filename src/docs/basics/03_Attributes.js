export default `
# Attributes
Yoffee allows you to use the elemenet's outside attributes. They are the first parameter to the callback function
sent to \`createYoffeeElement\`:
<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/bzjv2w6e/2/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br><br>
It is possible to send objects and callbacks from one yoffee element to another using attributes:
<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/4s5dhz1e/8/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
Notice how \`dosomething\` is a callback that returns another callback, which finally calls \`alert\`. That's because
the first callback returns the value of the attribute, and the value should be a function.


Let's expand on that example, and show a use case in which the child notifies the parent, and the parent updates the child:
<iframe width="100%" height="300" src="//jsfiddle.net/Numbnut/0c1pth8a/5/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
`