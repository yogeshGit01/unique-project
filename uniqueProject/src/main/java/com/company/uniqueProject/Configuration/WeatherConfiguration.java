package com.company.uniqueProject.Configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@ConfigurationProperties(prefix = "app.weather.api")
public class WeatherConfiguration {

	private String endpoint;

	private String accessKey;

}
