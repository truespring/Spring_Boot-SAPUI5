package com.todo.spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.spring.domain.entity.Board;
import com.todo.spring.service.BoardService;

@RestController
@RequestMapping("/test")
public class TodoController {
	
	private BoardService boardService;
	
	public TodoController(BoardService boardService) {
		this.boardService = boardService;
	}

	@RequestMapping("/index")
	public List<Board> list() {
		List<Board>list = boardService.getBoardList();
		System.out.println("index 이동");
		System.out.println(list.get(0));
		return list;
	}
}
