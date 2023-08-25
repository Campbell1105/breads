const React = require('react')
const Default = require('.layouts/default')

function Show ({bread, index}) {
    return (
        <Default>
            <h3>
                {bread.name}
            </h3>
            <p>This bread
                {
                    bread.hasGluten
                        ? <spam>does</spam>
                        : <span>does not</span>
                }
                have gluten
            </p>
            <img src={bread.image} alt={bread.name} />
            <form action="POST" method={`/breads/${index}?_method=DELETE`}>
                <input type="submit" value="DELETE"/>
            </form>
            <li><a href="/breads">Go home</a></li>
        </Default>
    )
}

module.exports = Show