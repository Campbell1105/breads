const React = require("react");
const Default = require("./layouts/default");

function Index(breads) {
  return (
    <Default>
      <h2>Index Page</h2>
      {/* <p>I have {breads[0].name} bread!</p> */}
      <div className="newButton">
<a href="/bread/new"><button> Go Home</button></a>
      </div>
      <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>{bread.name}</a>
            </li>
          )
        })
        }
      </ul>
    </Default>
  )
}

module.exports = Index;
