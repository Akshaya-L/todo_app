import React from 'react'


const CreateTask = ({onChangeForm, createTask }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Add Task</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Task Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="taskname" id="taskname" aria-describedby="emailHelp" placeholder="Task Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Task Description</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="taskdescription" id="taskdescription" placeholder="Task Description" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createTask()} className="btn btn-danger">Add</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask