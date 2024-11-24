import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[React.createElement("h1",{id:"child-content"},"hello world inside child"),
        React.createElement("h1",{id:"child-content1"},"hello world inside child1"),
        React.createElement("h1",{id:"child-content2"},"hello world inside child2")
    ]
    
    ),
    React.createElement("div",{id:"child1"},React.createElement("h1",{},"hello world from inside new chalid within the parent"))
]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
// console.log(parent)