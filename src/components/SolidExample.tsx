import { createSignal } from 'solid-js'

/** a counter written with Solid */
export default function SolidExample({ children }) {
  const title = 'Solid'
  const [count, setCount] = createSignal(0)
  const add = () => setCount(count() + 1)
  const subtract = () => setCount(count() - 1)

  return (
    <>
      <h2>{title}</h2>
      <div id="solid" class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="children">{children}</div>
    </>
  )
}
