package com.company.uniqueProject.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.company.uniqueProject.Dto.UserDto;
import com.company.uniqueProject.Repository.UserRepo;
import com.company.uniqueProject.Repository.Entities.UserEntity;

@Component
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
//	private static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

	@Override
	public UserEntity createUser(UserDto userDto) {

		UserEntity userEntity = userRepo.findByUserName(userDto.getUserName());

		if (userEntity == null) {
			userEntity = new UserEntity();

			userEntity.setUserName(userDto.getUserName());
			userEntity.setPassword(userDto.getPassword());
			userEntity.setRoles(userDto.getRole());

			userRepo.saveAndFlush(userEntity);
		}

		return userEntity;
	}
	
	
	@Override
	public UserEntity createNewUser(UserDto userDto) {
		UserEntity userEntity = userRepo.findByUserName(userDto.getUserName());

		if (userEntity == null) {
			userEntity = new UserEntity();

			userEntity.setUserName(userDto.getUserName());
//			userEntity.setPassword(PASSWORD_ENCODER.encode(userDto.getPassword()));
			userEntity.setRoles(userDto.getRole());

			userRepo.saveAndFlush(userEntity);
		}

		return userEntity;
	}


	@Override
	public List<UserEntity> getAllUser() {
		
		List<UserEntity> userEntity = userRepo.findAll();
		return userEntity;
	}

	@Override
	public UserEntity getByUserName(String userName) {
		UserEntity userEntity = userRepo.findByUserName(userName);
		return userEntity;
	}
	
	public static void main(String args[]) {
		System.out.println("age: "+age);// interface can hold the attributes also but they will be public, static, final
	}


}
