package com.todo.spring.service;

import java.util.ArrayList;
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
		for(int i = 0; i < boards.size(); i++) {
			System.out.println("no : " + boards.get(i).getBoard_no());
			System.out.println("title : " + boards.get(i).getBoard_title());
			System.out.println("contents : " + boards.get(i).getContents());
			System.out.println("writer_name : " + boards.get(i).getWriter_name());
		}
		
		return boards;
	}
}
