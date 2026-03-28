import { createRoot } from 'react-dom/client'
import Chai from './Chai'
import App from './App'
import React from 'react'
function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}
// const anotherElement=(
//     <a href="https:google.com">Google me login karo</a>
// )
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click kar reeee'
)
createRoot(document.getElementById('root')).render(
    <App/>
)
