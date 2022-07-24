package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.DogDto;
import com.example.demo.service.DogService;

@RestController
@RequestMapping("api")
public class DogsController {
	
	@Autowired
	DogService dogService;

	/**
	 * ワンちゃん一覧情報の取得用メソッド。
	 * @return ワンちゃんたち
	 */
	@CrossOrigin
	@GetMapping("/dogs")
	public ResponseEntity<List<DogDto>> getAllDogs() {
		System.out.println("ワンちゃん一覧情報を取得します");
		
		List<DogDto> dogs = dogService.findAll();
		
		dogs.forEach(d -> System.out.println(d.toString()));
	    return new ResponseEntity<List<DogDto>>(dogs, HttpStatus.OK);
	}

}
