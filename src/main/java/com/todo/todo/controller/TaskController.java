package com.todo.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.entity.Task;
import com.todo.todo.service.TaskService;

@RestController
public class TaskController {
	@Autowired
	TaskService taskService;
	
	@GetMapping(path = "/api/tasks")
    public ResponseEntity<?> listTasks() {
        List<Task> resource = taskService.getTask();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = "/api/task")
	public ResponseEntity<?> addTask(@RequestBody Task task) {
		Task resource = taskService.addTask(task);
        return ResponseEntity.ok(resource);
    }

}
