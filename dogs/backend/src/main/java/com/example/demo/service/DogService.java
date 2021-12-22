package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Dog;
import com.example.demo.repository.DogMapper;

@Service
public class DogService {
	
	@Autowired
	private DogMapper mapper;
	
	public List<Dog> findAll() {
		return mapper.findAll();
	}
}
