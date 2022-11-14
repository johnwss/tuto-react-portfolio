import { Visibility } from '@mui/icons-material';
import React, { useState } from 'react';
import { portfolio } from '../data/dummydata';


export const Portfolio = () => {
const [list, setList] = useState(portfolio);
return(
    <>
    <article>
        <div className="container">
            <div className="catButton">text</div>
        </div>
        <div className="content grid3">
            {list.map((items) => (
                <div className="box">
                     <div className="img">
                     <img src={items.cover} alt='' />
                        <p>{items.name}</p>
                     </div>
                     <div className="overlay">
                        <h3>{items.title}</h3>
                        <span>{items.name}</span>
                        <Visibility />
                     </div>
                </div>
            ))}
        </div>
    </article>
    </>
)
}