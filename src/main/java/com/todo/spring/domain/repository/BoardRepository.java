package com.todo.spring.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.spring.domain.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long>{
//	public List<Board> findAllOrderByIdAsc();
}
