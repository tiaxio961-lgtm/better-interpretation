
import React from "react";

const LearningCard = ({ title, description }) => {
    return (
        <div className="learning-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default LearningCard;
