package com.todo.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.todo.todo.entity.Task;
import com.todo.todo.repository.TaskRepository;

@Component
public class TaskService {
	
	
	@Autowired
	private TaskRepository taskRepository;
	
    public List<Task> getTask() {
        return taskRepository.findAll();
    }
    
    public Task addTask(Task task) {
    	return taskRepository.save(task);
    }

}
