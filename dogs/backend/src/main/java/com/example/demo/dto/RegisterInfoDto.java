package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterInfoDto {
	private UserDto user;
	private DogDto dog;
}
