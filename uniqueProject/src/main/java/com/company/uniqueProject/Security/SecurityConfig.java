//package com.company.uniqueProject.Security;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.company.uniqueProject.Service.CustomUserDetailsServiceImpl;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Configuration
//@EnableWebSecurity
//@Slf4j
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	@Autowired
//	private CustomUserDetailsServiceImpl customUserDetailsServiceImpl;
//
//	@Override
//	public void configure(HttpSecurity http) throws Exception {
//		log.info("inside securityConfig 1");
//		http.authorizeRequests()
//		     .antMatchers("/healthCheck/**",
//		    		 "/api/**"
////		    		 ,"/users/**"
////		    		 ,"/unsupported-browser.html","/resources/**","/app/**"
//		    		 ).permitAll()
//		     .anyRequest().authenticated()
//		     .and()
//		     .httpBasic()
//		     .and()
//		     .formLogin();
////		http.csrf().disable();
//		
////		http.requestMatcher(request ->{
////		 String method = request.getMethod();
////		 return !("GET".equalsIgnoreCase(method) || "POST".equalsIgnoreCase(method));
////		}).authorizeRequests().anyRequest().denyAll();
//	}
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		log.info("inside configure 2");
//		auth.userDetailsService(customUserDetailsServiceImpl).passwordEncoder(passwordEncoder());
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		log.info("inside PasswordEncoder 3");
//		return new BCryptPasswordEncoder();
//		
//	}
//	
//
//}
