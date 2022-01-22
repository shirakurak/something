package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.DogDto;
import com.example.demo.repository.DogMapper;

@Service
public class DogService {
	
	@Autowired
	private DogMapper mapper;
	
	public List<DogDto> findAll() {
		
		List<DogDto> dogs = mapper.findAll().stream().map(dog -> {
			return DogDto.builder()
				.id(dog.getId())
				.name(dog.getName())
				.area(dog.getArea())
				.image(convertBase64(dog.getImagePath()))
				.build();
		}).toList();
		
		return dogs;
	}
	
	/**
	 * images配下にある画像を、Base64に変換して返却します。
	 * @param name 画像ファイル名
	 * @return 画像ファイルのバイト列をBase64に変換した文字列
	 */
	String convertBase64(String name) {
		String p = 
			Paths.get("").toAbsolutePath().toString()
			+ "\\src\\main\\resources\\images\\"
			+ name;
		try {
			byte[] b = Files.readAllBytes(Paths.get(p));
			return Base64.getEncoder().encodeToString(b);
		} catch (IOException e) {
			System.out.println("画像の読み込みができませんでした。");	
			return null;
		}
	}
}
