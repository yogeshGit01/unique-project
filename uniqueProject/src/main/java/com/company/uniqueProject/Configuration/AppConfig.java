package com.company.uniqueProject.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.client.RestTemplate;

@Configuration
@EnableJpaAuditing
public class AppConfig {
	
	@Bean
	 public RestTemplate restTemplate() {
	        return new RestTemplate();
	    }

}
