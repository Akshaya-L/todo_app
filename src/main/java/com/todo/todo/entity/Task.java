package com.todo.todo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotNull;

import lombok.Data;


@Entity
@Data
public class Task {
	@Id
	@Column
	@GeneratedValue
    private long id;

    @Column
    @NotNull(message="{NotNull.Task.Name}")
    private String name;
    
    @Column
    @NotNull(message="{NotNull.Task.Description}")
    private String description;
    
    @Column
    private Date lastUpdatedOn;

    @PrePersist
    protected void onCreate() {
    	lastUpdatedOn = new Date();
    }
}
