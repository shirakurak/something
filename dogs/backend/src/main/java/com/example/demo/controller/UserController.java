package com.example.demo.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.repository.dto.UserDto;
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
	 * @param userDto リクエストボディ
	 * @return ユーザ情報
	 */
	@CrossOrigin
	@RequestMapping("/login")
	public ResponseEntity<UserDto> login(@RequestBody UserDto userDto) {
		System.out.println("ログインを実行します。");
		
		Optional<User> optUser = userService.selectUser(userDto.getId(), userDto.getPassword());
		
		if(optUser.isEmpty()) {
			System.out.println("指定されたユーザIDとパスワードに対するユーザが存在しません。");
			System.out.println("id=" + userDto.getId() + " password=" + userDto.getPassword());
			return new ResponseEntity<UserDto>(
				UserDto.builder()
				.id(null)
				.name(null)
				.password(null)
				.build(),HttpStatus.UNAUTHORIZED);
		}

		System.out.println("ログイン成功");
		System.out.println("ユーザ情報：" + optUser.get());
		return new ResponseEntity<UserDto>(
		  UserDto.builder()
		  .id(optUser.get().getId())
		  .name(optUser.get().getName())
		  .password(optUser.get().getPassword())
		  .build(),HttpStatus.OK);
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
