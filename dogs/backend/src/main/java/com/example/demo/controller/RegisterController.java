package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.RegisterInfoDto;
import com.example.demo.dto.UserDto;
import com.example.demo.service.RegisterService;

@RestController
@RequestMapping("api/register")
public class RegisterController {
	
	@Autowired
	RegisterService registerService;
	
	/**
	 * ワンチャン志願者の登録を行います。
	 * @param userDto リクエストボディ
	 * @return ユーザ情報
	 */
	@CrossOrigin
	@PostMapping("/applicant")
	public ResponseEntity<UserDto> registerApplicant(@RequestBody UserDto userDto) {
		System.out.println("ユーザ登録を行います。");
		//registerService.register(convertUserEntity(userDto));
		return new ResponseEntity<UserDto>(userDto,HttpStatus.OK);
	}

	/**
	 * 飼い主の登録を行います。
	 * @param userDto リクエストボディ
	 * @return ResponseEntity
	 */
	@CrossOrigin
	@PostMapping("/owner")
	public ResponseEntity<Void> registerOwner(@RequestBody RegisterInfoDto registerInfoDto) {
		System.out.println("飼い主登録を行います。");
		try {
			registerService.registerOwner(registerInfoDto);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		}
	}
	
}
