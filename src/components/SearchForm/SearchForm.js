import React from "react";
import "./SearchForm.css";

const SearchForm = props =>
    <form className="search">
        <div className="form-group">
            <label htmlFor="breed">Breed Name:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="breed"
                list="breeds"
                type="text"
                className="form-control"
                placeholder="Type in a dog breed to begin"
                id="breed"
            />
        </div>
        <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
        </datalist>
        <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-success"
            >
            Search
            </button>
    </form>

export default SearchForm;