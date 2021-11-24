
import React from 'react';
import REVIEW_COMMENTS_LABELS from './data/review_comments_label.json'

export function Review(props) {
    return (
        <div>
            <ReviewComments />
            <ReviewForm />
        </div>
        
    );
}

function ReviewComments() {
    let labels = REVIEW_COMMENTS_LABELS.map(r => {
        return (
            <CommentBox level = {r.level} key = {r.level}/>
        );
    });

    let commentsList = REVIEW_COMMENTS_LABELS.map(r => {
        return (
            <CommentList level={r.level} content={r.content} key={r.level}/>
        );
    });
    return (
        <div className="review-comments">
            <h2>Top Comments</h2>
            <h3> Filter By Ratings: </h3>
            {labels}
            {commentsList}
        </div>
    )
}



function ReviewForm() {
    let ratingList = REVIEW_COMMENTS_LABELS.map(r => {
        return (
            <ReviewFormInput id={r.ratingID} rating={r.rating} key={r.ratingID}/>
        );
    });
    return (
        <div class="review-form">
                <h2>Review Submission Form</h2>
                <form>

                    <label for="library name">Library Name: </label><br/>
                    <input type="text" id="libraryname" name="libraryname"/><br/>

                    <p>Your Rating: Scale from 1 to 5 Stars (1 = strongly dislike 5 = strongly like)</p>
                    {ratingList}
                    <p></p>
                    <label for="Comments">Comments: </label><br/>
                    <input type="text" id="comments" name="comments"/>

                    <p></p>
                    <input type="submit" value="Submit" aria-label="Submit Review Form"/>
                </form>
            </div>
    )  
}

function CommentBox(props) {
    let level = props.level;
    return (
        <label>
            <input type="checkbox" checked="checked" />
            <span className="checkmark"></span>
            {level}
        </label>
    );
}

function CommentList(props) {
    let contentLevel = props.level;
    let contentList = props.content;
    let contentLi = contentList.map(cl => {
        return (
            <li>{cl}</ li>
        );
    });
    return (
        <div>
            <h4>{contentLevel} Reviews</h4>
            <ol>
                {contentLi}
            </ol>
        </div>
    );
}

function ReviewFormInput(props) {
    let id = props.id;
    let rating = props.rating;
    return (
        <div>
            <input type="radio" id={id} name={id}/>
            <label for="html">{rating}</label><br/>
        </div>
    );
}