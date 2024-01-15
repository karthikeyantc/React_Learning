import { useRef } from "react"

function RefsDemo() {
    const nameInputRef = useRef<HTMLInputElement>(null)
    function handleClick() {
        console.log(nameInputRef.current?.value)
    }
    return (
        <>
            <span>Name : </span>
            <input type="text" ref={nameInputRef} />
            <button onClick={handleClick}>Show Name</button>
        </>
    )
}

export default RefsDemo