import { Amazer, AmazerBuilder, RandomizedPrim } from "amazer"

export function generateMaze() {
  const config = new AmazerBuilder()
    .withSize({ width: 10, height: 50 })
    .using(RandomizedPrim)
    .build()

  return new Amazer(config).generate()
}
