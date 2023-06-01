import { useState } from 'react'

export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 10)
    }

    function dec() {
        setCount(count - 10)
    }
    return [count, inc, dec]
}