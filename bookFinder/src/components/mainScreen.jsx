import React from "react";
import './mainScreen.css'

export function MainScreen() {
  return (
    <article className="bookcard">
      <header>
        <img className="bookcard-img"alt="Portada del libro" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg"></img>
        <div className="bookcard-info">
          <strong>Título del libro</strong>
          <p>Autor del libro</p>
          <p>Año del libro</p>
        </div>
      </header>

      <aside>
        <button>
          Añadir libro
        </button>
      </aside>
    </article>
  )
}  