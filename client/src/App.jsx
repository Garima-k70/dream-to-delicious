import { useState } from 'react'

function App() {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <h1>Dream to Delicious</h1>
      <h2>Chocolate Cake</h2>
      <p>Quantity: {quantity}</p>

      <button onClick={() => setQuantity((previousQuantity) => previousQuantity + 1)}>
        Add Cake
      </button>

      <button onClick={() => 
  setQuantity((previousQuantity) =>
    previousQuantity > 1 ? previousQuantity - 1 : 1
  )
}>
  Remove Cake
</button>
    </>
  )
}

export default App

