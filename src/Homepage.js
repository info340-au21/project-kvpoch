import HOME_PAGE_CARDS from './data/homepage_cards.json';
import React from 'react';

export function HomePage() {
    // console.log(1);
    let cardList = HOME_PAGE_CARDS.map(c => {
        return <HomePageCard img={c.img} labInfo={c.labInfo} name={c.name} key={c.name}/>;
    });

    return <div className="card-box">
                {cardList}
            </div>;
}

function HomePageCard(props) {
    let imgLink = props.img;
    let content = props.labInfo;
    let name = props.name;
    // console.log(imgLink);
    return <div className="card">
        <a href="./lib_info.html">
            <div className="card-content">
                <img src={imgLink} alt={name} />
                <p className="lib-info">{content}</p>
            </div>
        </a>
    </div>;
}