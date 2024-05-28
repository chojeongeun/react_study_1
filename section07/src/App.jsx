import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [input,setinput] = useState("")

  const isMount = useRef(false)

  // 1. 마운트 : 탄생
  //마운트되었을때만 최초로 딱 한번 실행시키고 싶을때
  useEffect (()=>{
    console.log("mount")
  },[])
  
  const onClickButton = (value) => {
    setCount(count + value);
  };

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
  if(!isMount.current){
    isMount.current = true;
    return;
  }
  console.log("update")
  })

  // 3. 언마운트 : 죽음

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
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
