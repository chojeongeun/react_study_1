import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

// 리렌더링될때마다 다시 생성될 필요 없고 상수여서 값 바꿀수도 없음. 따라서 컴퍼넌트 외부에 선언해도 됨.
const mockData = [
  {
    id: 0,
    isDone : false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone : false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone : false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  }
]

function App() {

  const [todos, seTodos] = useState(mockData)
  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
