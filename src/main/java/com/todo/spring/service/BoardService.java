package com.todo.spring.service;

import java.util.Collections;
import java.util.Comparator;
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
	
	// 게시판 리스트 sel
	@Transactional
	public List<Board> getBoardList() {
		List<Board> boards = boardRepository.findAll();
		
		// 리스트 정렬
		Collections.sort(boards,new Comparator<Board>() {
			public int compare(Board o1, Board o2) {
				if(o1.getBoard_no() > o2.getBoard_no()) {
					return 1;
				} else if(o1.getBoard_no() < o2.getBoard_no()) {
					return -1;
				} else {
					return 0;
				}
			}
		});
		
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
