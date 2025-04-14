//package com.company.uniqueProject.Service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//
//import com.company.uniqueProject.Repository.UserRepo;
//import com.company.uniqueProject.Repository.Entities.UserEntity;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Component
//@Slf4j
//public class CustomUserDetailsServiceImpl implements UserDetailsService {
//
//	@Autowired
//	private UserRepo useRepo;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//		log.info("inside loadUserByUsername");
//		UserEntity userEntity = useRepo.findByUserName(username);
//		log.info("userEntity findByUserName result: {}",userEntity);
//		if (userEntity != null) {
//			return User.builder().username(userEntity.getUserName()).password(userEntity.getPassword())
//					.roles(userEntity.getRoles()).build();
//
//		}
//		throw new UsernameNotFoundException("User not found for username: {}" + username);
//	}
//	
//
//
//}
