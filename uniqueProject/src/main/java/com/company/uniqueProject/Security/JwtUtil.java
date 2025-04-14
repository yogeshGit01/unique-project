package com.company.uniqueProject.Security;

import java.util.Date;
import java.util.UUID;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtil {

    private final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

	public String generateSingleUseToken(String uniqueKey) {
	    return Jwts.builder()
	        .setSubject("one-time")
	        .setId(UUID.randomUUID().toString()) // jti: unique ID
//	        .claim("custom_key", uniqueKey)                   // 👈 custom claim
	        .setIssuedAt(new Date())
	        .setExpiration(new Date(System.currentTimeMillis() + 30 * 1000)) // expires in 30 sec
	        .signWith(secretKey)
	        .compact();
	}

	public boolean validateToken(String token, String uniqueKey) {
	    try {
//	    	log.info("hi:--> {}" , token);
//	        Jws<Claims> claims = Jwts.parserBuilder()
//	            .setSigningKey(secretKey)
//	            .build()
//	            .parseClaimsJws(token);
	        
	        Claims claims = Jwts.parserBuilder()
	                .setSigningKey(secretKey)
	                .build()
	                .parseClaimsJws(token)
	                .getBody();

	        // You *could* extract jti and log it or compare with cache if needed
//	        String tokenKey = claims.get("custom_key", String.class);
//
//	        log.info("Return : {}", uniqueKey.equals(tokenKey));
//	        return uniqueKey.equals(tokenKey);
	        return true;
	    } catch (JwtException e) {
	        return false;
	    }
	}

}
