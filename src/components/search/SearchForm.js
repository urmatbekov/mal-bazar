import React from 'react';

const SearchForm = () => {
    return (
        <form className="form-row">
            <div className="form-group mr-4 flex-grow-1">
                <input className="form-control" type="text" />
            </div>
            <div className="form-group">
                <button className="btn btn-success btn-purple">Search</button>
            </div>
        </form>
    );
};

export default SearchForm;