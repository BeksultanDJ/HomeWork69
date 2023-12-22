import React from 'react';

interface ShowListProps {
    suggestions: string[];
}

const ShowList: React.FC<ShowListProps> = ({ suggestions }) => {

    if (!suggestions || suggestions.length === 0) {
        return null;
    }

    return (
        <div className="searchList">
            {suggestions.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default ShowList;
