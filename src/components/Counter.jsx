import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button type='button' onClick={() => setCount(count + 1)}>
        {count}
      </button>
      {count % 2 === 0 ? <p>The count is even</p> : null}
    </>
  )
}

export default Counter
