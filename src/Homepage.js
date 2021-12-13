import HOME_PAGE_CARDS from './data/homepage_cards.json';
import React from 'react';

export function HomePage(props) {
    let homePageCards = props.cards;
    let cardList = homePageCards.Filter(c => {
        return <HomePageCard img={c.img} labInfo={c.labInfo} name={c.name} key={c.name}/>;
    });

    return <div className="card-box">
                {cardList}
            </div>;
}

// This function creates a list of library info cards
function HomePageCard(props) {
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