import React from 'react';

export function Map() {
    return(
    <section className="flexMap">
        <div>
          <img src="..../project-draft/img/librarymap.png" alt="UW Campus Map" class="resize"/>
        </div>
      </section>
    )
}

export function FilterBy() {
    return(
        <section className="flexFilterBy">
        <h2> FILTER BY </h2>
        <label className="container"> Cafe/Coffee
          <input type="checkbox" checked="checked"/>
          <span className="checkmark"></span>
        </label>

        <label className="container"> Silent/Low Noise Level
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>

        <label className="container"> Medium Noise Level
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>

        <label className="container"> Computers
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>

        <label className="container"> Outdoor Seating
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
      </section>
    )
}