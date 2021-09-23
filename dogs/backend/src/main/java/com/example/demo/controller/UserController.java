package com.example.demo.controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Dog;
import com.example.demo.service.DogService;
import com.example.demo.service.UserService;

/**
 * 作成中
 */
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	DogService dogService;
	
	/**
	 * MySQLからデータを取ってこれるか検証用メソッド
	 * @return あった or ない
	 */
	@GetMapping("/test1")
	public String hello() {
		
		System.out.println("hello()メソッドが呼び出されました。");
		
		if(Objects.isNull(userService.selectUser("taro", "password"))) {
			return "ない";
		}
		return "あった";
	}
	
	/**
	 * ログイン検証用メソッド。
	 * @return ログイン可否
	 */
	@GetMapping("/login")
	public String login() {
		
		return "idとパスワードに対応するユーザがいたら、OKとか返す";
		
//		if(Objects.isNull(userService.selectUser("taro", "password"))) {
//			return "ない";
//		}
//		return "あった";
	}
	
	/**
	 * ワンちゃん情報の取得用メソッド。
	 * @return ワンちゃんたち
	 */
	@GetMapping("/dogs")
	public String getDogs() {
		
		List<Dog> dogs = dogService.selectDogs();
		
		System.out.println(dogs);
		
		return "dogsたちをresponseとして返却する。";
	}
}
