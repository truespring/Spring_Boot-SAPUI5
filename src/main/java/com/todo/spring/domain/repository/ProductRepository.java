package com.todo.spring.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.spring.domain.entity.ProductManagement;

public interface ProductRepository extends JpaRepository<ProductManagement, Integer> {

}
