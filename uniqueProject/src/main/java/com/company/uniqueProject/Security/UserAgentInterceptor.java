package com.company.uniqueProject.Security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class UserAgentInterceptor implements HandlerInterceptor {
	
	  @Override
	    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
	        String userAgent = request.getHeader("User-Agent");

	        if (userAgent != null) {
	            if (userAgent.contains("PostmanRuntime") || userAgent.contains("Postman")) {
	                log.info("Request is coming from Postman");
	            } else {
	                log.info("Request is coming from a browser or another client");
	            }
	        }

	        return true; // Continue processing the request
	  }

}
