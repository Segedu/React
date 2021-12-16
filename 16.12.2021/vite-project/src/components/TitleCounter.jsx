import { useState } from "react";

const TitleCounter = () => {
    const [counter, setCounter] = useState(0);

    // useEffect(change, [])
    // const change = () => {
    // }
  let  ll = document.title = { counter }

    return (<p onClick={() => { setCounter(counter + 1) }} >{ll}
    </p >
    )
}
export default TitleCounter;