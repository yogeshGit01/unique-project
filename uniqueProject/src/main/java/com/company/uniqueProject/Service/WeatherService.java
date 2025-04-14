package com.company.uniqueProject.Service;

import com.company.uniqueProject.Dto.WeatherApiResponse;

public interface WeatherService {
	
	public WeatherApiResponse getWeatherDataByCity(String cityName);

//	public String callPostMethod(String request);

}
