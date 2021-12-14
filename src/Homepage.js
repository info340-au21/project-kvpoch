import React from 'react';

export function HomePage(props) {
    let homePageCards = props.cards;
    if (homePageCards != null) {
        let cardList = homePageCards.map(c => {
            return <HomePageCard img={c.img} labInfo={c.labInfo} name={c.name} key={c.name} />;
        });
        return <div className="card-box">
            {cardList}
        </div>;
    } else {
        return <p>Loading Data</p>
    }
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