package com.todo.spring.dto;

import java.time.LocalDateTime;

import com.todo.spring.domain.entity.Board;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class BoardDTO {

	private Long board_no;
	private String board_title;
	private String contents;
	private String writer_name;
	private LocalDateTime reg_date;
	
	public Board toEntity() {
		Board build = Board.builder()
				.board_no(board_no)
				.board_title(board_title)
				.contents(contents)
				.writer_name(writer_name)
				.build();
		return build;
	}
	
	@Builder
	public BoardDTO(Long board_no, String board_title, String contents, String writer_name, LocalDateTime reg_date) {
		this.board_no = board_no;
		this.board_title = board_title;
		this.contents = contents;
		this.writer_name = writer_name;
		this.reg_date = reg_date;
	}
	
}
