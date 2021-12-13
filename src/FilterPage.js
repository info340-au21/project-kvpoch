import React from 'react';
import Filter_LABELS from './data/filter.json';

export function Filter() {
    return(
      <section className="flexFilter">
        <section className="flexFilterBox">
          <img src="./img/libraryFilter.png" alt="UW Campus Filter" class="resize"/>
        </section>
        {/* <FilterBox /> */}
        <p>test</p>
      </section>
    )
}

// This function creates a list of filter labels
function FilterBox() {
    let filterList = Filter_LABELS.filter(l => {
      return <FilterCards label={l.label} key={l.lebel}/>;
    });

    return(
        <section className="flexFilterBy flexFilterBox">
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

function FilterCardBox() {
  return (
    <div className='cardBox'>

    </div>
  );
}

// This function creates a list of library info cards
function FilterCard(props) {
  let imgLink = props.img;
  let content = props.labInfo;
  let name = props.name;
  return <div className="card">
      <a href="/lib_info">
          <div className="card-content">
              <img src={imgLink} alt={name} />
              <p className="lib-info">{content}</p>
          </div>
      </a>
  </div>;
}