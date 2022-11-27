import React from 'react';

export const MainButtons: React.FC = () => {
    return (<div className="mainButtons">
        <div style={{display: 'flex'}}>
            лого
        </div>
        <div>
            <button onClick={(e) => console.log("Main")}> Main </button>
        </div>
        <div>
            <button onClick={(e) => console.log("BookMarks")}>Bookmarks </button>
        </div>
    </div>);
}