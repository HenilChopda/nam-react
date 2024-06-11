/* <div parent>
    <div c1>
        <h1></h1>
        <h2></h2>
    </div>
    <div className="c2">
        <h1></h1>
        <h2></h2>
    </div>
</div> 
*/

const heading1 = React.createElement("parent" ,{},[
    React.createElement("Child1",{},[
        React.createElement("h1",{},"h1 tagggggg"),
        React.createElement("h2",{},"h2 tagggggg")
        ]),
        React.createElement("Child2",{},[
            React.createElement("h1",{},"c2h1 tagggggg"),
            React.createElement("h2",{},"c2h2 tagggggg")
    ])
]);
// const heading1 = React.createElement("h1",{id : "head" , xyz : "abc"},"something from react");
    
console.log(heading1);

const detail = ReactDOM.createRoot(document.getElementById("root"));
detail.render(heading1); 