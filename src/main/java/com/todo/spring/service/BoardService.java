package com.todo.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.todo.spring.domain.entity.Board;
import com.todo.spring.domain.repository.BoardRepository;
import com.todo.spring.dto.BoardDTO;

@Service
public class BoardService {

	private BoardRepository boardRepository;
	
	public BoardService(BoardRepository boardRepository) {
		this.boardRepository = boardRepository;
	}
	
	@Transactional
	public List<Board> getBoardList() {
		List<Board> boards = boardRepository.findAll();
		
		return boards;
	}
	
	@Transactional
	public int savePost(BoardDTO param) {
		return boardRepository.save(param.toEntity()).getBoard_no();
	}

	@Transactional
	public Board updatePost(BoardDTO param) {
		return boardRepository.save(param.toEntity());
	}
}
