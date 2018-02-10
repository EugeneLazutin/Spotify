import React  from 'react';
import './pagination.scss';

function Pagination (props) {
    let items = [];
    const {page, pages, handleClick} = props;

    if(pages <= 1) {
        return (null);
    }

    for (let i = 1; i <= pages && i <= 20; i++) {
        items.push((
            <li className={'page-item' + (i === page ? ' active' : '')} key={i}>
                <a className="page-link" onClick={() => {
                    handleClick(i);
                }}>{i}</a>
            </li>
        ))
    }

    return (
        <nav aria-label="..." className="pagination">
            <ul className="pagination pagination-sm">
                {items}
            </ul>
        </nav>
    );
}

export default Pagination;
