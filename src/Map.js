import React from 'react';
import MAP_FILTER_LABELS from './data/map_filter.json';

export function Map() {
    return(
      <section className="flexMap">
        <section className="flexMapBox">
          <img src="./img/librarymap.png" alt="UW Campus Map" class="resize"/>
        </section>
        <FilterBox />
      </section>
    )
}

// This function creates a list of filter labels
function FilterBox() {
    let filterList = MAP_FILTER_LABELS.map(l => {
      return <FilterCards label={l.label} key={l.lebel}/>;
    });

    return(
        <section className="flexFilterBy flexMapBox">
        <h2> FILTER BY </h2>
        {filterList}
      </section>
    )
}

// This components represents each filter label on the page
function FilterCards (props) {
  let label = props.label;
  return  <label className="container"> {label}
            <input type="checkbox" checked="checked"/>
            <span className="checkmark"></span>
          </label>;
}