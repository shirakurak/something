package com.example.demo.repositoty;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.entity.User;

@Mapper
public interface UserMapper {
	User selectUser(String name, String password);
}
