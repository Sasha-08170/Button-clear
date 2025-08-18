import InputClear from "./components/InputClear/InputClear";

import './App.css'

const App = () => {
  return (
    <>
      <InputClear onChange={(val) => console.log(val)} />
    </>
  )
}

export default App
