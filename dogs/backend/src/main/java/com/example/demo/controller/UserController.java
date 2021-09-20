package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UserService;

/**
 * とりあえず、MySQLからデータを取ってこれるか検証する用に作成したController
 */
//@Controller
//@RestController
//@RequestMapping("/hello")
@RestController
public class UserController {
	
	@Autowired
	UserService service;
	
//	@RequestMapping(method=RequestMethod.GET)
//	@GetMapping
//	public String hello() {
//		
//		System.out.println("hello");
//		
//		if(Objects.isNull(service.selectUser("taro", "password"))) {
//			return "ない";
//		}
//		return "あった";
//	}
	
	// 疎通できていない
	@GetMapping("/test1")
	public String write1() {
		return "Hello World1";
	}
}
