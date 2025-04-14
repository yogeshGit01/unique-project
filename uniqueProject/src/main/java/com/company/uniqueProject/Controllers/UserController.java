package com.company.uniqueProject.Controllers;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.uniqueProject.Dto.UserDto;
import com.company.uniqueProject.Repository.Entities.UserEntity;
import com.company.uniqueProject.Service.UserService;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/users")
@Slf4j
public class UserController {

	@Autowired
	private UserService userService;

	
	// create user with encoded password
	@RequestMapping(method = RequestMethod.POST, value = "/create-user")
	public ResponseEntity<UserEntity> createUser(@RequestBody UserDto userDto) {

		log.info("in create-user controller: {}" + userDto);
		return new ResponseEntity<>(userService.createNewUser(userDto), HttpStatus.OK);
	}

	
	//get all users
	@RequestMapping(method = RequestMethod.GET, value = "/get-all-Users")
	public ResponseEntity<List<UserEntity>> getAllUsers() {
		log.info("in get all users: {}" ,Thread.currentThread().getName());
		return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
	}

	
	//get user by username
	@RequestMapping(method = RequestMethod.GET, value = "/get-by-userName/{userName}")
	public ResponseEntity<?> getByUserName(@PathVariable String userName) {
		log.info("in get by username: {}", userName);

		if (StringUtils.isBlank(userName)) {
			return new ResponseEntity<>("User name can not be empty", HttpStatus.BAD_REQUEST);
		}

		UserEntity userEntity = userService.getByUserName(userName);

		if (userEntity == null) {
			return new ResponseEntity<>("No User Found", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(userEntity, HttpStatus.OK);
	}
	
	
	
	
	
	
	

}
