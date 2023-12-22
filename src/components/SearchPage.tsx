import axios from 'axios';
import React, { useState } from 'react';
import ShowList from "./ShowList";

const SearchPage = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        try {
            const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
            const data = response.data.map((item: any) => item.show.name);

            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </form>
            <button type="submit">Search</button>

            <ShowList suggestions={suggestions}  />
        </div>
    );
};

export default SearchPage;
