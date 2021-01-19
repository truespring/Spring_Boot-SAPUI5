package com.todo.spring.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "board")
@NoArgsConstructor
public class Board extends TimeEntity {

	@Id @GeneratedValue
	private Long board_no;
	
	@Column(length = 256, nullable = false)
	private String board_title;
	
	@Column(nullable = false)
	private String contents;
	
	@Column(length = 20, nullable = false)
	private String writer_name;
	
	@Builder
	public Board(Long board_no, String board_title, String contents, String writer_name) {
		this.board_no = board_no;
		this.board_title = board_title;
		this.contents = contents;
		this.writer_name = writer_name;
	}
}
