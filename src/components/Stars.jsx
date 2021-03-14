import { Star } from './Star';
import shortId from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';

export function Stars(props) {
    const {count} = props;
    if(count < 1 || count > 5 || !Number.isInteger(count))
    {
        return null;
    }

    let starsList = [];
    for(let i = 0;i<count;i++)
    {
        starsList.push({
        key: shortId.generate()
     });
    }
    
    return(
    <ul className="card-body-stars u-clearfix">
        <li>
            {starsList.map((el)=> <Star key={el.key}/>)}
        </li>
    </ul>
    )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number,
}