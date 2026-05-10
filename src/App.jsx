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
    <main className="app-shell py-5">
      <div className="container">
        <section className="hero-panel text-center mb-5">
          <h1 className="display-5 fw-bold mt-3 mb-3">Lista Attori</h1>
          <p className="hero-text mx-auto">
            Una raccolta di interpreti iconici con biografia, nazionalita e riconoscimenti.
          </p>
        </section>

        <div className="row g-4">
          {actors.map((actor) => (
            <div key={actor.id} className="col-12 col-md-6 col-xl-4">
              <article className="card actor-card h-100 border-0">
                <div className="actor-image-wrap">
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="card-img-top actor-image"
                  />
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <h2 className="h4 mb-1">{actor.name}</h2>
                      <p className="text-secondary mb-0">{actor.nationality}</p>
                    </div>

                    <span className="badge rounded-pill text-bg-dark actor-year">
                      {actor.birth_year}
                    </span>
                  </div>

                  <p className="actor-bio flex-grow-1">{actor.biography}</p>

                  <div className="mt-3">
                    <p className="small text-uppercase fw-semibold text-secondary mb-2">
                      Riconoscimenti
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      {actor.awards.map((award, index) => (
                        <span key={index} className="badge actor-award">
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App