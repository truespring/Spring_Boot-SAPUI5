package com.todo.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Sort;
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
	
	// 게시판 리스트 sel
	@Transactional
	public List<Board> getBoardList() {
		List<Board> boards = boardRepository.findAll();
		
		return boards;
	}
	
	// 등록 및 수정
	@Transactional
	public Long savePost(BoardDTO param) {
		return boardRepository.save(param.toEntity()).getBoard_no();
	}
	
	// 삭제
	@Transactional
	public void deletePost(Long board_no) {
		boardRepository.deleteById(board_no);
	}
}
