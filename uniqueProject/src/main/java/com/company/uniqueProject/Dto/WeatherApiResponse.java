package com.company.uniqueProject.Dto;

import java.util.List;

import lombok.Data;

@Data
public class WeatherApiResponse {

	private boolean success =true;
	private Request request;
	private Location location;
	private Current current;
	private ErrorResponse error;

	@Data
	public static class Request {
		private String type;
		private String query;
		private String language;
		private String unit;
	}

	@Data
	public static class Location {
		private String name;
		private String country;
		private String region;
		private String lat;
		private String lon;
		private String timezoneId;
		private String localtime;
		private long localtimeEpoch;
		private String utcOffset;
	}

	@Data
	public static class Current {
		private String observationTime;
		private int temperature;
		private int weatherCode;
		private List<String> weatherIcons;
		private List<String> weatherDescriptions;
		private int windSpeed;
		private int windDegree;
		private String windDir;
		private int pressure;
		private int precip;
		private int humidity;
		private int cloudcover;
		private int feelslike;
		private int uvIndex;
		private int visibility;
		private String isDay;
	}

	@Data
	public static class ErrorResponse {
		private int code;
		private String type;
		private String info;
	}
}
