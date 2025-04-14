package com.company.uniqueProject.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.company.uniqueProject.Security.HttpRequestInterceptor;
import com.company.uniqueProject.Security.UserAgentInterceptor;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class WebMVCConfig implements WebMvcConfigurer {

	@Autowired
	private HttpRequestInterceptor httpRequestInterceptor;
	
//	@Autowired
//	private UserAgentInterceptor userAgentInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry interceptorRegistry) {
		log.info("inside addInterceptor");
		interceptorRegistry.addInterceptor(httpRequestInterceptor)// add interceptors here spring will follow the order in with they are registerd
		.excludePathPatterns(// this is use to exclude the paths with you want to skip from httpRequestInterceptor 
				"/unsupported-browser.html",
				"/resources/**",
				"/app/**")
		;
//		interceptorRegistry.addInterceptor(userAgentInterceptor);


	}

}
