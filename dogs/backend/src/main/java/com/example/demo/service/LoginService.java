package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserMapper;

@Service
public class LoginService {
	
	@Autowired
	private UserMapper mapper;
	
	public Optional<User> findUser(String id, String password) {
		return mapper.findByIdAndPassword(id, password);
	}
	
	public void register(User user) {
		mapper.save(user);
	}
}
