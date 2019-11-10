import React from 'react'


class Pagination extends React.Component {
    render() {
        const pageNumbers = []; 

        for(let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.jobsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => {
                        return(
                            <li className="page-item">
                            <a onClick = {() => this.props.paginate(number)} href = "!#" className = "page-link">
                                {number} 
                            </a>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Pagination;