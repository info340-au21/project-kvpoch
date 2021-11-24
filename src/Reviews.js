
import React from 'react';
export function ReviewComments() {
    return (
        <div className="review-comments">
            <h2>Top Comments</h2>
            <h3> Filter By Ratings: </h3>

            <label>
                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
                1 Star
            </label>

            <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                2 Stars
            </label>

            <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                3 Stars
            </label>

            <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                4 Stars
            </label>

            <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                5 Stars
            </label>

            <h4>5 Star Reviews</h4>
            <ol>
                <li>Suzzalo is so beautiful and completely silent for studying! It's perfect for finals weeks!
                </li>
                <li>Ode has a nice coffee vending machine!</li>
                <li>It's easy to find a seat at the East Asia Library!</li>
            </ol>

            <h4>1 Star Reviews</h4>
            <ol>
                <li>There's too many people in Ode! I can never find a seat with a table!</li>
                <li>Suzzalo is too silent, it's kind of awkward.</li>
                <li>The restrooms at the East Asia Library sucks.</li>
            </ol>
        </div>
    )
}



export function ReviewForm() {

    return (
        <div class="review-form">
                <h2>Review Submission Form</h2>
                <form>

                    <label for="library name">Library Name: </label><br/>
                    <input type="text" id="libraryname" name="libraryname"/><br/>

                    <p>Your Rating: Scale from 1 to 5 Stars (1 = strongly dislike 5 = strongly like)</p>
                    <input type="radio" id="one" name="one"/>
                    <label for="html">1</label><br/>
                    <input type="radio" id="two" name="two"/>
                    <label for="css">2</label><br/>
                    <input type="radio" id="three" name="three"/>
                    <label for="three">3</label><br/>
                    <input type="radio" id="four" name="four"/>
                    <label for="four">4</label><br/>
                    <input type="radio" id="five" name="five"/>
                    <label for="five">5</label><br/>

                    <p></p>
                    <label for="Comments">Comments: </label><br/>
                    <input type="text" id="comments" name="comments"/>

                    <p></p>
                    <input type="submit" value="Submit" aria-label="Submit Review Form"/>

                </form>
            </div>
    
    )
    
}
