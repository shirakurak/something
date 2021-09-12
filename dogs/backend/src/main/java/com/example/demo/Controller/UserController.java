package com.example.demo.Controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.demo.Service.UserService;

/**
 * とりあえず、MySQLからデータを取ってこれるか検証する用に作成したController
 */
@Controller
public class UserController {
	
	@Autowired
	UserService service;
	
	public String selectUser() {
		if(Objects.isNull(service.selectUser("taro", "password"))) {
			return "ない";
		}
		return "あった";
	}
}
