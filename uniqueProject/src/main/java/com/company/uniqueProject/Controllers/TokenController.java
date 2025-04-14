package com.company.uniqueProject.Controllers;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.company.uniqueProject.Security.JwtUtil;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
@Slf4j
public class TokenController {

    private final JwtUtil jwtUtil;

    public TokenController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/token/init")
    public ResponseEntity<String> initToken(@RequestHeader("X-Unique-Key") String uniqueKey, HttpServletResponse response) {
        String token = jwtUtil.generateSingleUseToken(uniqueKey);

//        ResponseCookie cookie = ResponseCookie.from("jwt_token", token)
//                .httpOnly(true)
//                .secure(true) // required for HTTPS
//                .path("/")
//                .maxAge(10 * 60)
//                .sameSite("Strict")
//                .build();
//
//        response.addHeader("Set-Cookie", cookie.toString());
        
        String cookieValue = "jwt_token=" + token + "; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=600";


        response.addHeader("Set-Cookie", cookieValue);
        return ResponseEntity.ok("Token issued in cookie");
    }

    @GetMapping("/secure/data")
    public ResponseEntity<String> secureData(HttpServletRequest request) {
    	
    	
    	
        return ResponseEntity.ok("Accessed secure data!");
    }
    
    @GetMapping("/secure/dataa")
    public ResponseEntity<String> secureData(HttpServletRequest request,HttpServletResponse response) {
    	
    	String token = null;
        String uniqueKey = request.getHeader("X-Unique-Key");

        log.info("key: {}", uniqueKey);
		
		if (request.getCookies() != null) {
			for (Cookie cookie : request.getCookies()) {
				if ("jwt_token".equals(cookie.getName())) {
					token = cookie.getValue();
				}
			}
		}
		
		if (request.getRequestURI().startsWith("/api-tester/api/secure") ) {
			log.info("Validate1 ?");
			if (token == null || StringUtils.isEmpty(uniqueKey) || !jwtUtil.validateToken(token, uniqueKey)) {
//				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//				response.getWriter().write("Unauthorized: Token missing or invalid");
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized: Token missing or invalid");
			}
		}
    	
        return ResponseEntity.ok("Accessed secure data!");
    }
}

