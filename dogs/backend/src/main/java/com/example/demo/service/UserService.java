package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	
	public User selectUser(Integer id, String password) {
		return mapper.selectUser(id, password);
	}
}
