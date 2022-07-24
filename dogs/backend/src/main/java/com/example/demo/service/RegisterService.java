package com.example.demo.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.demo.dto.DogDto;
import com.example.demo.dto.RegisterInfoDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.Dog;
import com.example.demo.entity.User;
import com.example.demo.repository.DogMapper;
import com.example.demo.repository.UserMapper;

@Service
public class RegisterService {
	
	private static final String UPLOADED__FOLDER = "./src/main/resources/images/";
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private DogMapper dogMapper;
	
	public void registerOwner(RegisterInfoDto registerInfoDto) throws IOException {
		UserDto userDto = registerInfoDto.getUser();
		DogDto dogDto = registerInfoDto.getDog();
		dogDto.setId(userDto.getId()+"_"+dogDto.getName());
		byte[]bytes = Base64.getDecoder().decode(StringUtils.replace(
				dogDto.getImage(),"data:image/png;base64,",""));
		Path path = Paths.get(UPLOADED__FOLDER + dogDto.getId() + ".png");
        Files.write(path, bytes);
        
		userMapper.save(convertUserEntity(userDto));
		dogMapper.save(convertDogEntity(dogDto,
				userDto.getId()));
	}

	private User convertUserEntity(UserDto userDto) {
		User user = new User();
		user.setId(userDto.getId());
		user.setName(userDto.getName());
		user.setPassword(userDto.getPassword());
		user.setAddress(userDto.getAddress());
		user.setRoll(userDto.getRoll());
		
		return user;
	}
	
	private Dog convertDogEntity(DogDto dogDto, String ownerId) {
		Dog dog = new Dog();
		dog.setId(dogDto.getId());
		dog.setOwnerId(ownerId);
		dog.setName(dogDto.getName());
		dog.setKind(dogDto.getKind());
		dog.setAge(dogDto.getAge());
		dog.setSex(dogDto.getSex());
		dog.setImagePath(dogDto.getId()+".png");
		System.out.println("dogEntity:"+dog.toString());
		return dog;
	}
}
