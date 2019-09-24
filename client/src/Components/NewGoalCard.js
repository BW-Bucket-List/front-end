import React from "react";

const NewGoalCard = props =>{
    
    return(
        <div key={props.id}>
            <div>
                <div>
                    <h2>{props.goal}</h2>
                    <p>{props.category}</p>
                    <p>{props.location}</p>
                    <p>{props.date}</p>
                    <p>{props.description}</p>
                    
                </div>
            </div>
        </div>
    )
}