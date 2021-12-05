package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.entity.Dog;

@Mapper
public interface DogMapper {
	List<Dog> findAll();
}
