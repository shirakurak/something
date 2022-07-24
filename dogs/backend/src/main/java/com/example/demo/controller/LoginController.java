package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.service.LoginService;

@RestController
@RequestMapping("api")
public class LoginController {
	
	@Autowired
	LoginService loginService;
	
	/**
	 * 指定されたユーザIDとパスワードをもとにログイン処理を行います。
	 * @param userDto リクエストボディ
	 * @return ユーザ情報
	 */
	@CrossOrigin
	@RequestMapping("/login")
	public ResponseEntity<UserDto> login(@RequestBody UserDto userDto) {
		System.out.println("ログインを実行します。");
		
		Optional<User> optUser = loginService.findUser(userDto.getId(), userDto.getPassword());
		
		if(optUser.isEmpty()) {
			System.out.println("指定されたユーザIDとパスワードに対するユーザが存在しません。");
			System.out.println("id=" + userDto.getId() + " password=" + userDto.getPassword());
			return new ResponseEntity<UserDto>(
				UserDto.builder()
				.build(),HttpStatus.UNAUTHORIZED);
		}

		System.out.println("ログイン成功");
		System.out.println("ユーザ情報：" + optUser.get());
		return new ResponseEntity<UserDto>(
		  UserDto.builder()
		  .id(optUser.get().getId())
		  .name(optUser.get().getName())
		  .password(optUser.get().getPassword())
		  .roll(optUser.get().getRoll())
		  .build(),HttpStatus.OK);
	}

}
