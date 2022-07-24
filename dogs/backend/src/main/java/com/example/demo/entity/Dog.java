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
	private String ownerId;
	private String name;
	private String kind;
	private String sex;
	private String age;
	private String imagePath;
}
