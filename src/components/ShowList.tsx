import React from 'react';

interface ShowListProps {
    suggestions: string[];
    handleSuggestionClick: (suggestion: string) => void;
}

const ShowList: React.FC<ShowListProps> = ({ suggestions, handleSuggestionClick }) => {

    if (!suggestions || suggestions.length === 0) {
        return null;
    }

    return (
        <div className="searchList">
            {suggestions.map((item, index) => (
                <p key={index} onClick={() => handleSuggestionClick(item)}>
                    {item}
                </p>
            ))}
        </div>
    );
};

export default ShowList;
