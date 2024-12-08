import React from 'react'

function overlay({ position = "left", children }) {
    return (
        <div className={`overlay ${position}`}>
            {children}
        </div>
    );
}

export default overlay
