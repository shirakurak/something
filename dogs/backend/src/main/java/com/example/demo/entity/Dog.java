package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "dogs")
public class Dog {
	@Id
	private String id;
	private String name;
	private String area;
	private String imagePath;
}
