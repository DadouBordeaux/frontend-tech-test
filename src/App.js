import React from "react"

import Maze from "./views/maze/Maze"
import { generateMaze } from "./core/mazeGenerator"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Maze maze={generateMaze()} />
    </div>
  )
}

export default App
