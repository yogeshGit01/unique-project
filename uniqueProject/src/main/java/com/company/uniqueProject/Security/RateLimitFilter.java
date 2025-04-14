package com.company.uniqueProject.Security;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Bucket4j;
import io.github.bucket4j.Refill;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.*;

import java.io.IOException;
import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Slf4j
public class RateLimitFilter extends OncePerRequestFilter {

    private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

    	log.info("rate limiting");
        String clientIp = request.getRemoteAddr();
        Bucket bucket = buckets.computeIfAbsent(clientIp, this::newBucket);

        if (bucket.tryConsume(1)) {
            filterChain.doFilter(request, response); // Continue the filter chain
        } else {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.getWriter().write("Too many requests — try again later.");
        }
    }

    private Bucket newBucket(String key) {
        Refill refill = Refill.greedy(5, Duration.ofSeconds(20)); // 5 requests every 10 seconds
        Bandwidth limit = Bandwidth.classic(5, refill);
        return Bucket4j.builder().addLimit(limit).build();
    }
}
