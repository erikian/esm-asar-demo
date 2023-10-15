import logger from 'some-esm-transitive-dependency'

export default function printStuff(...stuff) {
  logger(...stuff)
}
