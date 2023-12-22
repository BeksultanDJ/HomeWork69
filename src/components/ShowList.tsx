import React from 'react';

interface ShowListProps {
    suggestions: string[];
    handleSuggestionClick: (suggestion: string) => void;
}

const ShowList: React.FC<ShowListProps> = ({ suggestions}) => {
    return (
        <div>
            {suggestions.map((item, index) => (
                <div key={index} >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ShowList;
