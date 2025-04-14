package com.company.uniqueProject.Dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class UserDto {
	@NonNull
	private String userName;
	
	@NonNull
	private String password;
	
	private String role;

}
