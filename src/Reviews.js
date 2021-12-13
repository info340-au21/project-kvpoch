

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, {useState} from 'react';
import REVIEW_COMMENTS from './data/comments.json'; 
//mport MaterialIcon from 'react-google-material-icons'
//import REVIEW_COMMENTS_LABELS from './data/review_comments_label.json'

export function Review() {
    
    const [reviewArray, setReviewArray] = useState(REVIEW_COMMENTS);
    const[ratingValue, setRating] = useState('');
    const [userValue, setUserValue] = useState('');
    const [libraryValue, setLibraryValue] = useState('');
    

    const ratingFunction = (ratingValue) => {
        if(ratingValue) {
            setRating(ratingValue);
            
        }
    }
  
    const userFunction = (userValue) => {
        if(userValue) {
            setUserValue(userValue);
        } else {
            setUserValue("Anonymous");
        }
    }

    const libraryFunction = (libraryValue) => {
        if(libraryValue) {
            setLibraryValue(libraryValue);
        } else {
            setLibraryValue("General");
        }
    }

    const addReview = (reviewText, ratingValue, userValue, libraryValue) => {
       
        const newReviewObj = {
          userName: userValue,
          library: libraryValue,
          rating: ratingValue,
          text: reviewText,
          timestamp: Date.now() 
        }
        const newReviewArray = [...reviewArray, newReviewObj]; 
        setReviewArray(newReviewArray);
        
      }
    
    return (
    <div className="container-fluid">
        
		<center><h2 className="mt-4">Library Reviews & Ratings</h2></center>
		
        <div className="row">
        <div className="col-6 col-lg-4 mt-4" >
        <UserForm user={userValue} props={userFunction} />
        <LibraryForm library={libraryValue} props={libraryFunction}/>
        <RatingForm rating={ratingValue} props={ratingFunction}/>
		<ReviewForm library={libraryValue} user={userValue} rating={ratingValue} whatToDoOnSubmit={addReview} 
        setUserOnSubmit={setUserValue} setLibraryOnSubmit={setLibraryValue} setRatingOnSubmit={setRating}/>
		</div>

		<div className="col-sm-6 col-lg-8 mt-4">
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
        
        props.whatToDoOnSubmit(textValue, props.rating, props.user, props.library);
        setTextValue(''); 
        props.setUserOnSubmit('');
        props.setLibraryOnSubmit('');
        props.setRatingOnSubmit('');

       
        
      }
    return (
        <div>
            
			<div className="form-group">
				<h3 className="mt-4"> Enter your Review:</h3>
				<textarea id="review" className="form-control" style={{resize:"none", height:"100px"}} 
                placeholder="Type your review! Your likes, dislikes and opinions! Please no offensive language or harrasment. "
                value={textValue}
                onChange={handleInput}></textarea>
                <button className="btn-lg btn-warning mt-4" onClick={handleSubmit}>Submit</button>
			</div>
        </div>
		
    )
}

function RatingForm (props) {
    
    const handleSelect = (event) => {
        props.props(event.target.value);
    }
   
    return (
        <div>
        <h3 className="mt-4">Rating:</h3>
        
            
            <select value= {props.rating} onChange={handleSelect} className="btn btn-secondary btn-sm dropdown-toggle" >
                <option value="No Rating">Select Rating</option>
                <option value="5 Stars">5 Stars - Excellent</option>
                <option value="4 Stars">4 Stars - Great</option>
                <option value="3 Stars">3 Stars - Average</option>
                <option value="2 Stars">2 Stars - Bad</option>
                <option value="1 Star">1 Star - Horrible</option>
                
            </select>        
        
    </div>
    )
}

function LibraryForm (props) {
    
    const handleSelect = (event) => {
        props.props(event.target.value);
    }
   
    return (
        <div>
        <h3 className="mt-4">Library:</h3>
        
            
            <select value= {props.library} onChange={handleSelect} className="btn-secondary btn-sm dropdown-toggle" >
                <option value="N/A">Select Library</option>
                <option value="Art Library">Art Library</option>
                <option value="Built Environment Library">Built Environment Library</option>
                <option value="Drama Library">Drama Library</option>
                <option value="East Asia Library">East Asia Library</option>
                <option value="Engineering Libraryr">Engineering Library</option>
                <option value="Foster Business Library">Foster Business Library</option>
                <option value="Suzzalo Library">Suzzalo Library</option>
                <option value="Odegaard Undergraduate Library">Odegaard Undergraduate Library</option>

                
            </select>        
        
    </div>
    )
}

function UserForm (props) {
    const handleInput = (event) => {
        props.props(event.target.value);
      }
    
    return (
        <div className="form-group">
                <h3 className="mt-2">Name: </h3>
                <input type="text" id="user"className="form-control" placeholder="Type your name" 
                value= {props.user} onChange={handleInput}/>
            </div>
    )
}


function CommentPane ({reviewComments} ){
    
    const componentArray = reviewComments.Filter((reviewObj) => {
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
      if(isLiked){
        thumbColor = "green";
        
      }

      const handleAnotherClick = (event) => {
        setIsDisliked(true);
        setDislikeCount(dislikeCount + 1);
    }
  
        let thumbDownColor = "grey";
        
        if(isDiskiked){
            thumbDownColor = "red";
        
        }
    return(
        <div className="comment">
            <p>{userName}</p>
            
            <p> <span className="material-icons">book </span> {library}</p>
            <p> <span className="material-icons" >star </span> {rating} <span className="material-icons" >star </span> </p>
            <p>{text}</p>
            <p>Was this helpful?</p>
            <button className="btn like-button" onClick={handleClick} >
            
          <span className="material-icons" style={{color:thumbColor}}>thumb_up  </span> {likeCount}
            </button>

          <button className="btn like-button" onClick={handleAnotherClick} > 
          <span className="material-icons" style={{color:thumbDownColor}}>thumb_down</span> {dislikeCount}
        </button>
        </div>
    )
}
