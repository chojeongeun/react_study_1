import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState,useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input,setinput] = useState("")

  useEffect(()=>{
   console.log(`count:${count} / input: ${input}`)
  },[count,input])
  //의존성 배열
  //dependency array = deps

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setinput(e.target.value)
        }}/>
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;