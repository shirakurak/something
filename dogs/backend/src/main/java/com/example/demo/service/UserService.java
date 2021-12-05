package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	
	public Optional<User> selectUser(String id, String password) {
		return Optional.ofNullable(mapper.selectUser(id, password));
	}
}
