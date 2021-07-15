import {
  addKeyWillBeAnEntryOrExitPointForFirstLine,
  addKeyWillBeAnEntryOrExitPointForFirstColumn,
} from "../core/getInAndOutForMaze"

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

describe(".addKeyWillBeAnEntryOrExitPointForFirstLine()", function () {
  // - passable
  // * not passable
  // | entry or exit point

  // ||*
  it("should return the second index that can be an entry or exit point", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Wall", passable: false },
      ],
    ]

    const result = addKeyWillBeAnEntryOrExitPointForFirstLine(mazeFirstLine)

    expect(result[0]).toEqual([
      { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
      { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
      { name: "Wall", passable: false, willBeAnEntryOrExitPoint: false },
    ])
  })

  // |-|
  it("should return the last index that can be an entry or exit point", function () {
    const mazeFirstLine = [
      [
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
        { name: "Floor", passable: true },
      ],
    ]

    const result = addKeyWillBeAnEntryOrExitPointForFirstLine(mazeFirstLine)

    expect(result[0]).toEqual([
      { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
      { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
      { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
    ])
  })

  // |-|
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

    const result = addKeyWillBeAnEntryOrExitPointForFirstLine(mazeFirstLine)

    expect(result).toEqual([
      [
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
      ],
      [
        { name: "Floor", passable: false, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: false, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: false, willBeAnEntryOrExitPoint: false },
      ],
    ])
  })

  // --|
  // ---
  // |-*
  it("should return the last index of the comunm that can be an entry or exit point", function () {
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

    const result = addKeyWillBeAnEntryOrExitPointForFirstLine(mazeFirstLine)

    expect(result).toEqual([
      [
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
      ],
      [
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
      ],
      [
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: true },
        { name: "Floor", passable: true, willBeAnEntryOrExitPoint: false },
        { name: "Floor", passable: false, willBeAnEntryOrExitPoint: false },
      ],
    ])
  })
})
