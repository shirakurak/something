package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.demo.dto.DogDto;
import com.example.demo.entity.Dog;
import com.example.demo.repository.DogMapper;

@Service
public class DogService {
	
	private static String UPLOADED__FOLDER = "./src/main/resources/images/";
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
	
	public void register(DogDto dog) throws IOException {
		
		
		byte[]bytes = Base64.getDecoder().decode(StringUtils.replace(dog.getImage(),"data:image/png;base64,",""));
		Path path = Paths.get(UPLOADED__FOLDER + "sample.png");
        Files.write(path, bytes);
		
		Dog entity = new Dog();
		// TODO id採番
		entity.setId(dog.getName());
		entity.setName(dog.getName());
		entity.setArea(dog.getArea());
		// TODO 変換
		entity.setImagePath("sample.png");
		System.out.println("dog entity:"+entity.toString());
		mapper.save(entity);
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
