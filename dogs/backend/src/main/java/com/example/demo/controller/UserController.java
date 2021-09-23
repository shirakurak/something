package com.example.demo.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UserService;

/**
 * とりあえず、MySQLからデータを取ってこれるか検証する用に作成したController
 */
@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("/test1")
	public String hello() {
		
		System.out.println("hello()メソッドが呼び出されました。");
		
		if(Objects.isNull(service.selectUser("taro", "password"))) {
			return "ない";
		}
		return "あった";
	}
}
