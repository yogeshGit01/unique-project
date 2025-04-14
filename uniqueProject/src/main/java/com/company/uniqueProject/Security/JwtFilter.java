package com.company.uniqueProject.Security;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

@Component
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

	private final JwtUtil jwtUtil;

	public JwtFilter(JwtUtil jwtUtil) {
		this.jwtUtil = jwtUtil;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

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
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				response.getWriter().write("Unauthorized: Token missing or invalid");
				return;
			}
		}

		filterChain.doFilter(request, response);
	}
}
