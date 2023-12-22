import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestions } from './showListSlice.ts';
import ShowList from './ShowList';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const suggestions = useSelector((state: any) => state.shows.suggestions);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            dispatch(fetchSuggestions(value));
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        console.log('Selected suggestion:', suggestion);
    };

    return (
        <div>
            <form className="searchBar">
                <input
                    className="input"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </form>

            <ShowList suggestions={suggestions} handleSuggestionClick={handleSuggestionClick}  />
        </div>
    );
};

export default SearchPage;
