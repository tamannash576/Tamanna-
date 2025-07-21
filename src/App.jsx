import React, { useState } from 'react'

function App() {
  const [name, setname] = useState('Dear')
  const user = {
    name: "Tamanna Sharma",
    Bio: "Front end developer since 45 days"
  }
  let age = 22;
  function sayhello() {
    console.log("hello")
  }
  return (
    <>
      <Hero userDetails={user} data2={age} fun={sayhello}
        name={name} setname={setname} />
    </>
  )
}

export default App


function Hero({ userDetails, data2, fun, name, setname }) {

  return (
    <div>
      <h1>hello {name}</h1>
      <Card data={userDetails} setname={setname} />
      <h3>my age,{data2}</h3>
      <button onClick={() => fun()}>say hello</button>
    </div>
  )
}



function Card({ data, setname }) {
  function changename() {
    setname("Tamanna Sharma");
  }
  return (
    <>
      <h2>Name:{data.name}</h2>
      <h2>Bio:{data.Bio}</h2>
      <button onClick={changename}>click me </button>
    </>
  )
}





