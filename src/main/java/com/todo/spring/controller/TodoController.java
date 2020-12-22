package com.todo.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TodoController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/test")
	public String mockServer() {
		return "test/mockServer";
	}
}
