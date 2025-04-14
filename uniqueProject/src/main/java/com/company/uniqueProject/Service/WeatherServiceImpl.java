package com.company.uniqueProject.Service;

import java.net.UnknownHostException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import com.company.uniqueProject.Configuration.WeatherConfiguration;
import com.company.uniqueProject.Dto.WeatherApiResponse;
import com.company.uniqueProject.Repository.WeatherApiTransactionRepo;
import com.company.uniqueProject.Repository.Entities.WeatherApiTransactionEntity;
import com.google.gson.Gson;

import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class WeatherServiceImpl implements WeatherService {

	private RestTemplate restTemplate;
	private WeatherApiTransactionRepo weatherApiTransactionRepo;
	private WeatherConfiguration weatherConfiguration;
	
	public WeatherServiceImpl(@NonNull RestTemplate restTemplate,
			@NonNull WeatherApiTransactionRepo weatherApiTransactionRepo,
			@NonNull WeatherConfiguration weatherConfiguration ) {
		this.restTemplate=restTemplate;
		this.weatherApiTransactionRepo=weatherApiTransactionRepo;
		this.weatherConfiguration=weatherConfiguration;
		
	}

	@Override
	public WeatherApiResponse getWeatherDataByCity(String cityName) {

		String apiEndpoint = weatherConfiguration.getEndpoint().replace("API_KEY", weatherConfiguration.getAccessKey())
				.replace("cityName", cityName);
		log.info("final api endpoint --> " + apiEndpoint);

		try {
			ResponseEntity<String> httpResponse = restTemplate.exchange(apiEndpoint, HttpMethod.GET, null,
					String.class);
			log.info("response from weather API-->" + httpResponse);
//			log.info("response from weather API-->" + httpResponse.getBody());

			Gson gson = new Gson();
			WeatherApiResponse weatherResponse = gson.fromJson(httpResponse.getBody(), WeatherApiResponse.class);

			WeatherApiTransactionEntity weatherApiTransactionEntity = new WeatherApiTransactionEntity();
			weatherApiTransactionEntity.setCityName(cityName);
			weatherApiTransactionEntity.setApiResponseCode(httpResponse.getStatusCodeValue());
			weatherApiTransactionEntity.setApiResponse(httpResponse.getBody());
			weatherApiTransactionRepo.saveAndFlush(weatherApiTransactionEntity);

			if (httpResponse.getStatusCodeValue() == 200) {
				return weatherResponse;
			}

		} catch (ResourceAccessException e) {
			if (e.getCause() instanceof UnknownHostException) {
				log.error("Could not resolve the API host: " + e.getCause().getMessage());
				log.error("Could not resolve the API host: " + e);
				// Handle failure gracefully (e.g., fallback, retry, etc.)
			} else {
				log.info("Error accessing resource: " + e.getMessage());
			}
		}

		return null;
	}

//	@Override
//	public String callPostMethod(String request) {
//		
//		String apiEndPoint ="http://localhost:8080/api-tester/weather/callPost";
//		
//		HttpEntity<String> httpEntity = new HttpEntity<String>(request);
//		
//		ResponseEntity<String> httpResponse = restTemplate.exchange(apiEndPoint, HttpMethod.POST, httpEntity,
//				String.class);
//		log.info("response from weather API-->" + httpResponse);
//		return httpResponse.getBody();
//	}

}
