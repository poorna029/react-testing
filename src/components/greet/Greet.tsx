import { greetProps } from "./Greet.types"

const Greet = (props:greetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet