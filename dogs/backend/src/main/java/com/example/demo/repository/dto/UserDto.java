package com.example.demo.repository.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {
	private String id;
	private String name;
	private String password;
}
