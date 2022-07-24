package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Dog;

@Mapper
public interface DogMapper extends JpaRepository<Dog, String> {
	List<Dog> findAll();
	
	@SuppressWarnings("unchecked")
	Dog save(Dog dog);
}
