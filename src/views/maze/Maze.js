import React from "react"

import * as images from "../../images"
import "./Maze.css"

function getImages(cell) {
  if (cell.exitPoint) {
    return images.stairsDown
  }

  if (cell.passable) {
    return images.floor
  }

  if (!cell.passable) {
    return images.wall
  }
}

function Maze({ tiles }) {
  return (
    <div className="Maze">
      {tiles.map((row) => (
        <div className="Maze-row">
          {row.map((slot) => (
            <SlotContent slot={slot} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Maze

function SlotContent({ slot }) {
  if (slot.entryPoint) {
    return (
      <span className="slot-with-player-on-it">
        <img className="absolute-position" src={images.stairsUp} alt="" />
        <img className="absolute-position" src={images.player} alt="" />
      </span>
    )
  }

  return <img src={getImages(slot)} alt="" />
}
