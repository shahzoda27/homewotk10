import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Todos from './component/Todos'
export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Todos/>} />
    </Routes>
  )
}
