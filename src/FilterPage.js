import React, {useState} from 'react';
import FILTER_LABELS from './data/filter.json';
import LIB_FEATURES from './data/lib_features.json';
import { useEffect } from 'react';



export function Filter() {
  const [filterResult, setFilterResult] = useState(
    new Array(0).fill("")
  );
  const [filterCheckedArray, setFilterCheckedArray] = useState(
    new Array(FILTER_LABELS.length).fill(false)
  );

  useEffect(() => {
    // console.log(filterCheckedArray);
    handleFilterBox(filterCheckedArray, filterResult, setFilterResult, LIB_FEATURES);
  }, [filterCheckedArray, filterResult]);

  // console.log(FilterCheckedArray);
    return(
      <section className="flexFilter">
        <section className="flexFilterBox">
          <FilterCardBox result={filterResult} />
        </section>
        <FilterBox labels={FILTER_LABELS} checkedState={filterCheckedArray} func={setFilterCheckedArray}/>
      </section>
    )
}

// A helper function to handle clicks on the input boxes
function handleOnChange(checkedState, arrayId, func) {
  let newCheckedState = checkedState.map((i, id) => {
    if(arrayId === id) {
      return !i;
    } else {
      return i;
    }
  });
  func(newCheckedState);
}

function handleFilterBox(currCheckedState, currFilterResult, setCurrFilterResult, libFeatures) {
    let newFilterResult = libFeatures.map((lib, libId) => {
      let libName = lib.name;
      // console.log(libNames);
      let libFeat = lib.feature[0];
      let libKeys = Object.keys(libFeat);
      let comparisonResult = libKeys.map((name, ftId) => {
        // console.log("current ID: " + ftId + " lib name: " + name);
        if (currCheckedState[ftId] === true && libFeat[name] === true) {
          return (libName); 
        }
        return "";
      });
      console.log(comparisonResult);
        
    });
    // console.log(newFilterResult);
}

// This component is to show the filtered library card
function FilterCardBox(props) {
  let filterResult = props.result;
  // let func = props.func;
  if (filterResult.length === 0) {
    return (
      <div className='cardBox'>
        <p>Sorry, there is no result matching for your selected checkedState.</p>
      </div>
    );
  }
  return (
    <div className='cardBox'>
      {/* <FilterBox func={func} /> */}
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

// This function creates a list of filter labels with clickable boxes
function FilterBox(props) {
    let labels = props.labels;
    let checkedState = props.checkedState;
    let func = props.func
    let filterList = labels.map((l, idx) => {
      return <Filters label={l.label} key={l.label} id={idx} checkedState={checkedState} func={func}/>;
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
  let checkedState = props.checkedState;
  let func = props.func;
  let arrayId = props.id;
  // console.log(arrayId)
  return  <label className="container"> {label}
            <input type="checkbox" checked={checkedState[arrayId]} onChange={
              () => handleOnChange(checkedState, arrayId, func)} />
            <span className="checkmark"></span>
          </label>;
}


