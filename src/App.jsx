import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Errore nel recupero attori:', error)
      })
  }, [])

  return <></>
}

export default App