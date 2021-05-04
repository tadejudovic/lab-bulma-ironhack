import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import SignUpPage from './SignUpComponent/SignUp'
function App() {


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

      </body>
    </html>

  )
}

export default App;
