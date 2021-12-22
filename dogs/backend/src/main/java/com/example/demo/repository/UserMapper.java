package com.example.demo.repository;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

@Mapper
public interface UserMapper extends JpaRepository<User, String> {
	Optional<User> findByIdAndPassword(String id, String password);
}
