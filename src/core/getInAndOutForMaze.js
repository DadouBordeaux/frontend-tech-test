export function addKeyEntryAndExitPoint(maze) {
  let isEntryPointAvailable = true
  let isExitPointAvailable = true

  return maze.map((line, lineIndex) => {
    const isFirstLine = lineIndex === 0

    return line.map((slot, columnIndex) => {
      const isFirstColumnIndex = columnIndex === 0
      const areAllSlotsAfterThisSlotUnpassable =
        getAreAllSlotsInThisLineAfterThisSlotUnpassable(line, columnIndex)
      const areAllSlotsInTheColumnAfterThisSlotUnpassable =
        getAreAllSlotsInTheColumnAfterThisSlotunpassable(maze, lineIndex)
      const isThisSlotPassable = slot.passable

      const willBeAnEntryOrExitPointForFistColumn =
        isThisSlotPassable &&
        areAllSlotsInTheColumnAfterThisSlotUnpassable &&
        isFirstColumnIndex
      const willBeAnEntryOrExitPointForFistLine =
        isThisSlotPassable && areAllSlotsAfterThisSlotUnpassable && isFirstLine

      const willBeAnEntryOrExitPoint =
        willBeAnEntryOrExitPointForFistLine ||
        willBeAnEntryOrExitPointForFistColumn

      const entryPoint = isEntryPointAvailable && willBeAnEntryOrExitPoint

      const exitPoint =
        isExitPointAvailable &&
        !isEntryPointAvailable &&
        willBeAnEntryOrExitPoint

      if (entryPoint) {
        isEntryPointAvailable = false
      }

      if (exitPoint) {
        isExitPointAvailable = false
      }

      return {
        ...slot,
        entryPoint,
        exitPoint,
      }
    })
  })
}

function getAreAllSlotsInThisLineAfterThisSlotUnpassable(line, columnIndex) {
  return line
    .slice(columnIndex + 1, line.length)
    .every((slot) => slot.passable === false)
}

function getAreAllSlotsInTheColumnAfterThisSlotunpassable(maze, lineIndex) {
  const firstColumnIndex = 0
  return maze
    .map((column) => column[firstColumnIndex])
    .slice(lineIndex + 1, maze.length)
    .every((slot) => slot.passable === false)
}
