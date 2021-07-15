import { Amazer, AmazerBuilder, RandomizedPrim } from "amazer"

export function generateMaze() {
  const config = new AmazerBuilder()
    .withSize({ width: 5, height: 5 })
    .using(RandomizedPrim)
    .build()

  return new Amazer(config).generate()
}
