package com.todo.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.todo.spring.domain.entity.Board;
import com.todo.spring.domain.entity.ProductManagement;
import com.todo.spring.domain.repository.BoardRepository;
import com.todo.spring.domain.repository.ProductRepository;

@Service
public class BoardService {

	private BoardRepository boardRepository;
	private ProductRepository productRepository;
	
	public BoardService(BoardRepository boardRepository) {
		this.boardRepository = boardRepository;
	}
	
	@Transactional
	public List<Board> getBoardList() {
		List<Board> boards = boardRepository.findAll();
		
		return boards;
	}
	
	public ProductManagement save(ProductManagement param) {
		productRepository.save(param);
		return param;
	}
}
