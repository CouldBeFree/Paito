import React from 'react';

const Card = ({ currency }) => (
    <div>
        <h1>Card</h1>
        <ul className="card-holder">
            {currency.map((item) => {
                return <li key={item.RAW.LASTMARKET}>
                    <p>{item.RAW.FROMSYMBOL}</p>
                    <p>{`${item.RAW.PRICE} ${item.RAW.TOSYMBOL}`}</p>
                    </li>
            })}
        </ul>
    </div>
);

export default Card;