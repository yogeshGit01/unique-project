package com.company.uniqueProject.Configuration;

import org.springframework.context.annotation.*;
import org.springframework.core.Ordered;

import com.company.uniqueProject.Security.JwtFilter;
import com.company.uniqueProject.Security.RateLimitFilter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean jwtFilterRegistration(JwtFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(filter);
        registration.addUrlPatterns("/api/secure/*"); // protect only these
        registration.setOrder(Ordered.LOWEST_PRECEDENCE); // run last
        return registration;
    }
    
    @Bean
    public FilterRegistrationBean rateLimitFilterRegistration(RateLimitFilter filter) {
        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(filter);
        registrationBean.addUrlPatterns("/api/secure/*");
        registrationBean.setOrder(Ordered.LOWEST_PRECEDENCE -1); // Optional: set order
        return registrationBean;
    }
}

