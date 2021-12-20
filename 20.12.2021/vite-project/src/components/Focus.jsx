import { useRef } from "react"

const Focus = () => {
    const inputRef = useRef()

    return (
        <div >
            <button onClick={() => { inputRef.current.focus() }}>set focus</button>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default Focus