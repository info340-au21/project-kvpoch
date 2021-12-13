

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, {useState} from 'react';
import REVIEW_COMMENTS from './data/comments.json'; 
//mport MaterialIcon from 'react-google-material-icons'
//import REVIEW_COMMENTS_LABELS from './data/review_comments_label.json'

export function Review() {
    const [reviewArray, setReviewArray] = useState(REVIEW_COMMENTS)
    const addRating = (ratingValue) => {
        let rating = ratingValue;
        return rating; 

    }
    const addReview = (reviewText, msgUser = "Katherine") => {
       
        const newReviewObj = {
          userName: msgUser,
          library: "libraryName",
          rating: addRating(),
          text: reviewText,
          timestamp: Date.now() 
        }
        const newReviewArray = [...reviewArray, newReviewObj]; 
        setReviewArray(newReviewArray);
        console.log(newReviewArray);
      }
    
    return (
    <div className="container-fluid">
        
		<h2 className="mt-2">Real Student Reviews</h2>
		
        <div className="row">
        <div className="col-6 col-lg-4" >

        <RatingForm whatToDoOnSubmit={addRating}/>
		<ReviewForm whatToDoOnSubmit={addReview}/>
		</div>

		<div className="col-sm-6 col-lg-8">
			<CommentPane reviewComments={reviewArray}/>
            
		</div>

        
        </div>
	</div>
        
    );
}



function ReviewForm(props) {
 


    const [textValue, setTextValue] = useState('');
    const handleInput = (event) => {
        setTextValue(event.target.value);
      }

      const handleSubmit = (event) => {
        
        props.whatToDoOnSubmit(textValue);
        setTextValue(''); //clear old value
        
      }
    return (
        <div>
            
           
            
			<div className="form-group">
				<h3> Enter your Review:</h3>
				<textarea id="review" className="form-control" style={{resize:"none", height:"100px"}} value={textValue}
                onChange={handleInput}></textarea>
                <button className="btn-lg btn-warning mt-2" onClick={handleSubmit}>Submit</button>
			</div>
        </div>
		
    )
}

function RatingForm (props) {
    const[ratingValue, setRating] = useState('');
    const handleSelect = (event) => {
        setRating(event.target.value);
    }
   
    return (
        <div>
        <h3 className="mt-2">Rating:</h3>
        
            
            <select value= {ratingValue} onChange={handleSelect} className="btn btn-secondary btn-sm dropdown-toggle" >
                <option value="N/A">Select Rating</option>
                <option value="5 Stars-Excellent">5 Stars - Excellent</option>
                <option value="4 Stars-Great">4 Stars - Great</option>
                <option value="3 Stars-Average">3 Stars - Average</option>
                <option value="2 Stars-Bad">2 Stars - Bad</option>
                <option value="1 Star-Horrible">1 Star - Horrible</option>
                
            </select>
            
                
                
                
        
    </div>
    )
}
/*
function LibraryForm () {
    const handleInput = (event) => {
        setTextValue(event.target.value);
      }
    const [textValue, setTextValue] = useState('');
    return (
        <div className="form-group">
                <h3 className="mt-2">Library: </h3>
                <input type="text" id="user"className="form-control" placeholder="Type Library Name" 
                value= {textValue} onChange={handleInput}/>
            </div>
    )
}
*/

function CommentPane ({reviewComments} ){
    
    const componentArray = reviewComments.map((reviewObj) => {
        const theElem = <Comment comment={reviewObj} key={reviewObj.timestamp} />;
        return theElem
    });
    return (
        <div className="ml-4"> 
            <h3 className="mt-2">Reviews</h3>
            {componentArray}
            </div>
        
    )
}


function Comment(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isDiskiked, setIsDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    
    const {userName, rating, text, library} = props.comment;
    const handleClick = (event) => {
        setIsLiked(true);
        setLikeCount(likeCount + 1);
        
      }
    
      let thumbColor = "grey";
      let thumbsUpIcon = "favorite_border";
      if(isLiked){
        thumbColor = "green";
        thumbsUpIcon = "favorite";
      }

      const handleAnotherClick = (event) => {
        setIsDisliked(true);
        setDislikeCount(dislikeCount + 1);
    }
  
        let thumbDownColor = "grey";
        let thumbsDownIcon = "favorite_border";
        if(isDiskiked){
            thumbDownColor = "red";
        thumbsDownIcon = "favorite";
        }
    return(
        <div className="comment">
            <p>{userName}</p>
            
            <p> <span className="material-icons">book </span> {library}</p>
            <p> <span className="material-icons" >star </span> {rating} <span className="material-icons" >star </span> </p>
            <p>{text}</p>
            <button className="btn like-button" onClick={handleClick} >
            
          <span className="material-icons" style={{color:thumbColor}}>thumb_up  </span> {likeCount}
            </button>

          <button className="btn like-button" onClick={handleAnotherClick} > 
          <span className="material-icons" style={{color:thumbDownColor}}>thumb_down</span> {dislikeCount}
        </button>
        </div>
    )
}
