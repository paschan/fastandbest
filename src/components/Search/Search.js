import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form className="d-flex col-4 ms-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        );
    }
}

export default Search;