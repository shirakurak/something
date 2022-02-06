package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@Builder
@ToString(exclude="image")
public class DogDto {
	private String id;
	private String name;
	private String area;
	private String image;
}
