package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repositoty.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	
	public User selectUser(String name, String password) {
		return mapper.selectUser(name, password);
	}
}
