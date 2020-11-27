
let state = {
    darkTheme: true,
    sideMenuOpen: window.innerWidth > 800,
    selectedNode: null,
    docNode: null,
    tree: {
        name: "ROOT",
        children: [{
            name: "Basics",
            opened: true,
            children: [{
                name: "Getting Started",
                children: [],
                isSelected: true,
            }, {
                name: "Hello World",
                children: []
            },{
                name: "Data Binding",
                children: []
            }, {
                name: "Text",
                children: []
            }, {
                name: "Attributes",
                children: []
            }, {
                name: "CSS",
                children: []
            }, {
                name: "Events",
                children: []
            }, {
                name: "Conditions",
                children: []
            }, {
                name: "Nesting Templates",
                children: []
            }, {
                name: "Custom Elements",
                children: []
            }, {
                name: "Introduction",
                children: []
            }]
        }, {
            name: "Advanced",
            children: [{
                name: "Sharing State",
                children: []
            }, {
                name: "Multiple States",
                children: []
            }, {
                name: "Performance Optimization",
                children: []
            }]
        }, {
            name: "Comparison",
            children: [{
                name: "React",
                children: []
            }, {
                name: "Vue",
                children: []
            }, {
                name: "LitHTML and LighterHTML",
                children: []
            }]
        }, {
            name: "Examples",
            children: [{
                name: "Form",
                children: []
            }, {
                name: "Todo list",
                children: []
            }]
        }]
    }
};

document.addEventListener('swiped-left', function(e) {
    if (state.sideMenuOpen) {
        state.sideMenuOpen = false;
    }
});

state.docNode = state.tree.children[0]
state.selectedNode = state.tree.children[0].children[0]

export default state;