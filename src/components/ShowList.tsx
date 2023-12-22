import React from 'react';

interface ShowListProps {
    suggestions: string[];
    handleSuggestionClick: (suggestion: string) => void;
}

const ShowList: React.FC<ShowListProps> = ({ suggestions}) => {
    return (
        <div className="searchList">
            {suggestions.map((item, index) => (
                <p key={index} >
                    {item}
                </p>
            ))}
        </div>
    );
};

export default ShowList;
