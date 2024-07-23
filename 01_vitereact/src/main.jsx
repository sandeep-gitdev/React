import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

         // this code not execute become the syntax is not upto react object classification
// const reactElement = {
//   type: 'a',                         
//   props: {
//       href: 'https://google.com',
//       traget: '_blank'
//   },
//   Children: 'Click me to visit google'
// }

      // this code executed

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

     const anotherUser = "chai aur react"

   const reactElement = React.createElement(   // by deafult injector (babel injection) transpil the jsx code into simple react functions the can be understood by browsers
         'a',   // html element
         {href: 'https://google.com', target: '_blank'},  // set Attribute for element if dont have any set empty it
         'click me to visit google',  // text to inject in html tag
           anotherUser   // variable injection after tree is fromed (evalueted expression)
   )

ReactDOM.createRoot(document.getElementById('root'))
.render(
    // reactElement
    //anotherElement

    reactElement

    // <App />

)
