import { useState } from 'preact/hooks'

/** a example written in Preact */
export function PreactExample({ children }) {
  const title = 'Preact'
  const [count, setCount] = useState(0)
  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <>
      <h2>{title}</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="children">{children}</div>
    </>
  )
}
