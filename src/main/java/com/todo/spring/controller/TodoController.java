package com.todo.spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.spring.domain.entity.Board;
import com.todo.spring.dto.BoardDTO;
import com.todo.spring.dto.ProductSaveRequestDTO;
import com.todo.spring.service.BoardService;
import com.todo.spring.service.ProductManagementService;

@RestController
@RequestMapping("/test")
public class TodoController {
	
	private BoardService boardService;
	private ProductManagementService productManagementService;
	
	public TodoController(BoardService boardService) {
		this.boardService = boardService;
	}

	// 리스트 뿌리기
	@RequestMapping("/index")
	public List<Board> list() {
		List<Board>list = boardService.getBoardList();
		System.out.println("index 이동");
		System.out.println(list.get(0));
		return list;
	}
	
	// 등록 및 수정
	@PostMapping("/reg")
	public @ResponseBody Long write(@RequestBody BoardDTO param) {
		System.out.println(param.getBoard_title());
		System.out.println(param.getContents());
		System.out.println(param.getWriter_name());
		
		return boardService.savePost(param);
	}
	
	// 삭제
	@PostMapping("/del")
	public String delete(@RequestBody BoardDTO param) {
		Long board_no = param.getBoard_no();
		System.out.println("board_no : " + board_no);
		boardService.deletePost(board_no);
		return "";
	}
	
	@RequestMapping(value="/index2", method = RequestMethod.POST)
	public @ResponseBody Long save(@RequestBody ProductSaveRequestDTO param) {
		System.out.println(param.getOrder_no());
		System.out.println(param.getCustomers());
		System.out.println(param.getProduct_name());
		System.out.println(param.getProduct_size());
		System.out.println(param.getQuantity());
		System.out.println(param.getMaterials());
		System.out.println(param.getRequired_quantity());
		System.out.println(param.getProduct_quantity());
		System.out.println(param.getOutsourcing());
		System.out.println(param.getDeadline());
		System.out.println(param.getStart_date());
		System.out.println(param.getEnd_date());
		System.out.println(productManagementService.save(param));
		return productManagementService.save(param); // 값 자체를 응답
	}
}
