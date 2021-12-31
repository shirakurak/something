package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DogDto {
	private String id;
	private String name;
	private String area;
	private String image;
}
