package com.company.uniqueProject.Service;

import java.util.List;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.company.uniqueProject.Dto.UserDto;
import com.company.uniqueProject.Repository.Entities.UserEntity;

@Component
public interface UserService {
	
	int age = 3;
//	static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

	
	public UserEntity createUser(UserDto userDto);
	
	public List<UserEntity> getAllUser();

	public UserEntity getByUserName(String userName);

	public UserEntity createNewUser(UserDto userDto);

}
