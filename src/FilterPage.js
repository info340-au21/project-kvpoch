import React, {useState} from 'react';
import FILTER_LABELS from './data/filter.json';
import FILTER_FEATURES from './data/lib_features.json';

export function Filter() {
  const [filterResult, setFilterResult] = useState('');
  const [filterFeatures, setFilterFeatures] = useState([]);

    return(
      <section className="flexFilter">
        <section className="flexFilterBox">
          <FilterCardBox result={filterResult}/>
          
        </section>
        <FilterBox />
      </section>
    )
}

function FilterCardBox(props) {
  let filterResult = props.result;
  if (filterResult.length === 0) {
    return (
      <div className='cardBox'>
        <p>Sorry, there is no result matching for your selected features.</p>
      </div>
    );
  }
  return (
    <div className='cardBox'>

    </div>
  );
}

// This function creates a list of library info cards
function FilterCard(props) {
  return <div className="card">
    <div className="card-content">
        <p className="lib-info"></p>
    </div>
  </div>;
}

// This function creates a list of filter labels
function FilterBox(props) {
    let filterList = FILTER_LABELS.map(l => {
      return <Filters label={l.label} key={l.label}/>;
    });

    return(
        <section className="flexFilterBy">
        <h2> FILTER BY </h2>
        {filterList}
      </section>
    )
}

// This components represents each filter label on the page
function Filters (props) {
  let label = props.label;
  return  <label className="container"> {label}
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>;
}


