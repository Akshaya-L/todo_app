import React from 'react'

export const DisplayBoard = ({numberOfTasks, getAllTasks}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Tasks Added</h4>
            <div className="number">
            {numberOfTasks}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllTasks()} className="btn btn-warning">Get all Tasks</button>
            </div>
        </div>
    )
}