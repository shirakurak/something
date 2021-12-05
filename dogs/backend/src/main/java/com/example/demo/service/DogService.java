package com.example.demo.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.DogMapper;

@Service
public class DogService {
	
	@Autowired
	private DogMapper mapper;
	
	public Map<String, Object> selectDogs() {
		Map<String, Object> map = new HashMap<>();
		mapper.selectDogs().stream().forEach(d -> map.put(d.getId(), d));
		
		return map;
	}
}
