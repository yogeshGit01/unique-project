package com.company.uniqueProject.Security;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

@Component
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    // @Value("${secure.api.path:/api-tester/api/secure}")
    // private String secureApiPath;

    public JwtFilter(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String token = extractToken(request);
        String uniqueKey = request.getHeader("X-Unique-Key");

        log.info("Received request for URI: {}", request.getRequestURI());
        log.info("X-Unique-Key: {}", maskKey(uniqueKey));

        if (request.getRequestURI().startsWith("/api-tester/api/secure")) {
            log.info("Validating token for secure endpoint...");
            if (StringUtils.isEmpty(token)) {
                log.warn("Token is missing");
                respondUnauthorized(response, "Unauthorized: Token is missing");
                return;
            }

            if (StringUtils.isEmpty(uniqueKey)) {
                log.warn("Unique key is missing");
                respondUnauthorized(response, "Unauthorized: Unique key is missing");
                return;
            }

            if (!jwtUtil.validateToken(token, uniqueKey)) {
                log.warn("Token validation failed");
                respondUnauthorized(response, "Unauthorized: Token is invalid");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    private String extractToken(HttpServletRequest request) {
        // Extract token from cookies
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt_token".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }

        // Fallback to Authorization header
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }

        return null;
    }

    private String maskKey(String key) {
        if (StringUtils.isEmpty(key)) {
            return "N/A";
        }
        return key.length() > 4 ? "****" + key.substring(key.length() - 4) : "****";
    }

    private void respondUnauthorized(HttpServletResponse response, String message) throws IOException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write(message);
    }
}