import React from 'react'

export const Tasks = ({tasks}) => {

    console.log('tasks length:::', tasks.length)
    if (tasks.length === 0) return null

    const TaskRow = (task,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{task.lastUpdatedOn}</td>
              </tr>
          )
    }

    const taskTable = tasks.map((task,index) => TaskRow(task,index))

    return(
        <div className="container">
            <h2>Tasks</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Last Updated On</th>
                </tr>
                </thead>
                <tbody>
                    {taskTable}
                </tbody>
            </table>
        </div>
    )
}