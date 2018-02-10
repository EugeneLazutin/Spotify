import classnames from 'classnames';
import React from 'react';
import { pageLimit } from '../../constants/app';
import './pagination.scss';

function Pagination (props) {
    let items = [];
    const {page, pages, handleClick} = props;

    for (let i = 1; i <= pages && i <= pageLimit; i++) {
        items.push((
            <li className={classnames({'page-item': true, 'active': i === page})} key={i}>
                <a className="page-link" onClick={() => {
                    handleClick(i);
                }}>{i}</a>
            </li>
        ))
    }

    if (items.length <= 1) {
        return (null);
    }

    return (
        <nav aria-label="..." className="pagination">
            <ul className="pagination pagination-sm">
                {page !== 1 ?
                    (<li className='page-item prev'>
                        <a className="page-link" onClick={() => {
                            handleClick(page - 1);
                        }}>prev</a>
                    </li>) : null}
                {items}
                {page !== items.length ?
                    (<li className='page-item next'>
                        <a className="page-link" onClick={() => {
                            handleClick(page + 1);
                        }}>next</a>
                    </li>) : null}
            </ul>
        </nav>
    );
}

export default Pagination;
