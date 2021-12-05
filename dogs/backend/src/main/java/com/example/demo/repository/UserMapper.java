package com.example.demo.repository;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.entity.User;

@Mapper
public interface UserMapper {
	Optional<User> findByIdAndPassword(String id, String password);
}
