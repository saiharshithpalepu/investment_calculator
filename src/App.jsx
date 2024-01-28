import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'
import { useState } from "react"

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:12 
})

const inputValid= userInput.duration>=1


function handleChange(inputIdentifier,new_value){
  setUserInput(prevState=>{
      return (
          {...prevState,
              [inputIdentifier]:+new_value
          }
      )
  })
}
 
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputValid && <p className='center'>Please enter the duration greater than 0</p>}
      {inputValid && <Results input={userInput}/>}
    </>
  )
}

export default App
