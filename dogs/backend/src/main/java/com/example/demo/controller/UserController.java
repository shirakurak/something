package com.example.demo.controller;

import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.DogService;
import com.example.demo.service.UserService;

/**
 * 作成中
 */
@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	UserService userService;
	@Autowired
	DogService dogService;
	
	/**
	 * 指定されたユーザIDとパスワードをもとにログイン処理を行います。。
	 * @param userId ユーザID
	 * @param password パスワード
	 * @return ログイン可否
	 */
	@CrossOrigin
	@RequestMapping("/login/userId/{userId}/password/{password}")
	public int login(@PathVariable Integer userId, @PathVariable String password) {
		System.out.println("ログインを実行します。");
		if(Objects.isNull(userService.selectUser(userId, password))) {
			System.out.println("指定されたユーザIDとパスワードに対するユーザが存在しません。");
			System.out.println("userId=" + userId + " password=" + password);
			return 0;
		}
		return 1;
	}
	
	/**
	 * ワンちゃん情報の取得用メソッド。
	 * @return ワンちゃんたち
	 */
	@CrossOrigin
	@GetMapping("/dogs")
	public ResponseEntity<Map<Integer, Object>> getDogs() {
		Map<Integer, Object> map = dogService.selectDogs();
	    return new ResponseEntity<Map<Integer, Object>>(map, HttpStatus.OK);
	}
}
