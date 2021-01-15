package com.todo.spring.domain.entity;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class TimeEntity {

	@Column(nullable = false)
	private String deadline;
	
	@Column()
	private String start_date;
	
	@Column()
	private String end_date;
}
