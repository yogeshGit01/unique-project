package com.company.uniqueProject.Repository.Entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Data;

@Entity
@Data
@Table(name="WEATHER_API_TRANSACTIONS")
@EntityListeners(AuditingEntityListener.class)

public class WeatherApiTransactionEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="WEATHER_API_TRANSACTIONS_ID")
	private Long watherApiTransactionId;
	
	@Column(name="CITY_NAME")
	private String cityName;
	
	@Column(name="API_RESPONSE_CODE")
	private int apiResponseCode;
	
	@Column(name="API_RESPONSE")
	private String apiResponse;
	
	@CreatedDate
    @Column(name = "creation_date", nullable = false, updatable = false)
    private LocalDateTime creationDate;

    @LastModifiedDate
    @Column(name = "last_modified_date", nullable = false)
    private LocalDateTime lastModifiedDate;

}
