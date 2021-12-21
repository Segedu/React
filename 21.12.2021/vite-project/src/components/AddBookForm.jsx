import { useRef, useState } from "react";

const AddBookForm = () => {
    const nameRef = useRef();
    const pagesRef = useRef();
    const authorRef = useRef();
    const [disabled, setDisabled] = useState(false);

    const isValid = () => {
        return nameRef.current.value.length > 0 && pagesRef.current.value.length > 0 && authorRef.current.value.length > 0
    }

    return (<div>
        < form action="" onChange={() => { setDisabled(isValid) }} onSubmit={e => {
            e.preventDefault();
            if (isValid) {
                console.log(
                    nameRef.current.value,
                    pagesRef.current.value,
                    authorRef.current.value)
            }
        }} >
            <input ref={nameRef} type="text" placeholder='book name' />
            <input ref={authorRef} type="text" placeholder='author name' />
            <input ref={pagesRef} type="text" placeholder='pages' />
            <input disabled={!disabled} type="submit" value="send" />
        </form >
    </div>)
}

export default AddBookForm;