import React from "react"

import Maze from "./views/maze/Maze"
import { generateMaze } from "./core/mazeGenerator"

import "./App.css"
import { addKeyEntryAndExitPoint } from "./core/getInAndOutForMaze"

function App() {
  const tiles = addKeyEntryAndExitPoint(generateMaze().tiles)
  return (
    <div className="App">
      <Maze tiles={tiles} />
    </div>
  )
}

export default App
