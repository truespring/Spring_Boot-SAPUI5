package com.todo.spring.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class ProductManagement {

	@Id @GeneratedValue
	private int product_no;
	
	@Column(length = 256, nullable = false)
	private String order_no;
	
	@Column(length = 20, nullable = false)
	private String customers;
	
	@Column(length = 20, nullable = false)
	private String product_name;
	
	@Column(length = 10)
	private int product_size;
	
	@Column(length = 10, nullable = false)
	private int quantity;
	
	@Column(length = 10, nullable = false)
	private String materials;
	
	@Column(length = 10, nullable = false)
	private int requried_quantity;
	
	@Column(length = 10)
	private int product_quantity;
	
	@Column(length = 10, nullable = false)
	private String outsourcing;
}
