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
	private String kind;
	private String age;
	private String sex;
	private String image;
}
