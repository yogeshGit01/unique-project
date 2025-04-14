package com.company.uniqueProject.Controllers;

import org.apache.commons.lang3.StringUtils;
//import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.uniqueProject.Dto.WeatherApiResponse;
import com.company.uniqueProject.Service.WeatherService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/weather")
@Slf4j
public class WeatherController {

	@Autowired
	private WeatherService weatherService;

	@RequestMapping(method = RequestMethod.GET, 
			value = "/get-weather-by-city/{cityName}")
	public ResponseEntity<?> getWeatherData(@PathVariable String cityName) {
		log.info("inside city controller for city-->" + cityName);
		
		if(StringUtils.isBlank(cityName)) {
			return new ResponseEntity<String>("City name can not be empty", HttpStatus.BAD_REQUEST);

		}

		WeatherApiResponse weatherApiResponse = weatherService.getWeatherDataByCity(cityName);
		if (weatherApiResponse == null) {
			return new ResponseEntity<String>("city Not Found", HttpStatus.NOT_FOUND);

		}
		return new ResponseEntity<WeatherApiResponse>(weatherApiResponse, HttpStatus.OK);

	}
	
	
//	@RequestMapping(method = RequestMethod.POST, value="/callPost")
//	public ResponseEntity<String> callPost(@RequestBody String request ) {
//		log.info("inside callPost");
//		
//		return new ResponseEntity<String>( weatherService.callPostMethod(request), HttpStatus.OK);
//		
//	}

}
