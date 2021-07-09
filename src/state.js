import GettingStarted from "./docs/basics/00_GettingStarted.js";
import HelloWorld from "./docs/basics/01_HelloWorld.js";
import DataBinding from "./docs/basics/02_DataBinding.js";
import Attributes from "./docs/basics/03_Attributes.js";
import LifecycleHooks from "./docs/basics/04_LifecycleHooks.js";

import TodoList from "./docs/examples/00_TodoList.js";
import Comparisons from "./docs/comparison/00_Comparisons.js";


const PAGES = {
    home: "home",
    docs: "docs",
    supportUs: "support-us",
    thankYou: "thank-you"
}

let state = {
    darkTheme: true,
    sideMenuOpen: window.innerWidth > 800,
    selectedNode: null,
    tree: {
        name: "ROOT",
        children: [{
            name: "Documentation",
            opened: true,
            children: [{
                name: "Getting Started",
                children: [],
                isSelected: true,
                doc: GettingStarted,
            }, {
                name: "Hello World",
                children: [],
                doc: HelloWorld
            }, {
                name: "Data Binding",
                children: [],
                doc: DataBinding
            }, {
                name: "Attributes",
                children: [],
                doc: Attributes
            }, {
                name: "Lifecycle",
                children: [],
                doc: LifecycleHooks
            },
            //     {
            //     name: "Text",
            //     children: []
            // }, {
            //     name: "Attributes",
            //     children: []
            // }, {
            //     name: "CSS",
            //     children: []
            // }, {
            //     name: "Events",
            //     children: []
            // }, {
            //     name: "Conditions",
            //     children: []
            // }, {
            //     name: "Nesting Templates",
            //     children: []
            // }, {
            //     name: "Custom Elements",
            //     children: []
            // }
            ]
        },
        //     {
        //     name: "Advanced",
        //     children: [{
        //         name: "Sharing State",
        //         children: []
        //     }, {
        //         name: "Multiple States",
        //         children: []
        //     }, {
        //         name: "Performance Optimization",
        //         children: []
        //     }]
        // }, {
        //     name: "Comparison",
        //     children: [{
        //         name: "React",
        //         children: []
        //     }, {
        //         name: "Vue",
        //         children: []
        //     }, {
        //         name: "LitHTML and LighterHTML",
        //         children: []
        //     }]
        // },
        {
            name: "Examples",
            children: [
            //     {
            //     name: "Form",
            //     children: []
            // },
                {
                name: "Todo list",
                children: [],
                doc: TodoList
            }]
        }, {
            name: "Comparisons",
            children: [],
            doc: Comparisons
        },
        ]
    }
};
state.tree.children.forEach(
    (category, catIndex) => category.children.forEach(
        (n, index) => {
            n.previous = state.tree.children[catIndex].children[index - 1]
            n.next = state.tree.children[catIndex].children[index + 1]
        }
    )
)

document.addEventListener('swiped-left', function(e) {
    if (state.sideMenuOpen) {
        state.sideMenuOpen = false;
    }
});

state.selectedNode = state.tree.children[0].children[0]

export default state;
export {PAGES}