import React from 'react';

const Card = (props) => {
    console.log(props);
    return (
        <>
          <li className="item">
              <img className="item-img" src={props.img} alt='img'/>
              <h1 className="item-title">{props.title}</h1>
              <p className="item-paragraf">{props.parag}</p>
              <ul className="item-list">
                <li className="item2">{props.li1}</li>
                <li className="item2">{props.li2}</li>
                <li className="item2">{props.li3}</li>
              </ul>
            </li>   
        </>
    );
}

export default Card;
