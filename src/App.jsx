import { useEffect, useState } from 'react'

function App() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('https://lanciweb.github.io/demo/api/actors/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setActors(data)
      })
      .catch((error) => {
        console.error('Errore nel recupero attori:', error)
      })
  }, [])

  return (
    <main className="app">
      <h1>Lista Attori</h1>

      <section className="actors-grid">
        {actors.map((actor) => (
          <article key={actor.id} className="actor-card">
            <img
              className="actor-image"
              src={actor.image}
              alt={actor.name}
            />

            <div className="actor-content">
              <h2>{actor.name}</h2>
              <p>
                <strong>Anno nascita:</strong> {actor.birth_year}
              </p>
              <p>
                <strong>Nazionalita:</strong> {actor.nationality}
              </p>
              <p>
                <strong>Biografia:</strong> {actor.biography}
              </p>
              <p>
                <strong>Riconoscimenti:</strong> {actor.awards.join(', ')}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App