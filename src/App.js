import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import SignUpPage from './SignUpComponent/SignUp'
function App() {

  const [counter, setCounter] = React.useState(1);


  function Increment() {
    setCounter(counter + 1)
  }

  function Decrement() {
    setCounter(counter - 1)
  }

  function Footer(props) {
    return <footer>{props.counter}</footer>
  }

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      <Navbar></Navbar>



      <body>

        <SignUpPage></SignUpPage>

        <div>

        </div>

        <p>{counter}</p>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>


        <Footer></Footer>
      </body>

      
    </html>

  )
}

export default App;
