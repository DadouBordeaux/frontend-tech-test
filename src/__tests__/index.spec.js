import { addKeyEntryAndExitPoint } from "../core/getInAndOutForMaze"

export const mazeForTest = [
  [
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: false },
  ],
  [
    { name: "Wall", passable: false },
    { name: "Wall", passable: false },
    { name: "Wall", passable: false },
    { name: "Wall", passable: false },
    { name: "Floor", passable: true },
  ],
  [
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
  ],
  [
    { name: "Wall", passable: false },
    { name: "Wall", passable: false },
    { name: "Floor", passable: true },
    { name: "Wall", passable: false },
    { name: "Floor", passable: true },
  ],
  [
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Floor", passable: true },
    { name: "Wall", passable: false },
    { name: "Floor", passable: true },
  ],
]

describe(".addKeyEntryAndExitPoint()", function () {
  // - passable
  // * not passable
  // > entry point
  // < exit point

  // ><*
  it("should return the second index that can be an entry or exit point", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Wall", passable: false },
      ],
    ]

    const result = addKeyEntryAndExitPoint(mazeFirstLine)

    expect(result[0]).toEqual([
      { name: "Floor", passable: true, entryPoint: true, exitPoint: false },
      { name: "Floor", passable: true, entryPoint: false, exitPoint: true },
      { name: "Wall", passable: false, entryPoint: false, exitPoint: false },
    ])
  })

  // >-<
  it("should return the last index that can be an entry or exit point", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
      ],
    ]

    const result = addKeyEntryAndExitPoint(mazeFirstLine)

    expect(result[0]).toEqual([
      { name: "Floor", passable: true, entryPoint: true, exitPoint: false },
      { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
      { name: "Floor", passable: true, entryPoint: false, exitPoint: true },
    ])
  })

  // >-<
  // ***
  it("should return the last index that can be an entry or exit point only on the fist line", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
      ],
      [
        { name: "Floor", passable: false },
        { name: "Floor", passable: false },
        { name: "Floor", passable: false },
      ],
    ]

    const result = addKeyEntryAndExitPoint(mazeFirstLine)

    expect(result).toEqual([
      [
        { name: "Floor", passable: true, entryPoint: true, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: true },
      ],
      [
        { name: "Floor", passable: false, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: false, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: false, entryPoint: false, exitPoint: false },
      ],
    ])
  })

  // -->
  // ---
  // <-*
  it("should return the last index of the column that can be an entry or exit point", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
      ],
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
      ],
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: false },
      ],
    ]

    const result = addKeyEntryAndExitPoint(mazeFirstLine)

    expect(result).toEqual([
      [
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: true, exitPoint: false },
      ],
      [
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
      ],
      [
        { name: "Floor", passable: true, entryPoint: false, exitPoint: true },
        { name: "Floor", passable: true, entryPoint: false, exitPoint: false },
        { name: "Floor", passable: false, entryPoint: false, exitPoint: false },
      ],
    ])
  })
})
