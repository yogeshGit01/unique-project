package com.company.uniqueProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.uniqueProject.Repository.Entities.WeatherApiTransactionEntity;

public interface WeatherApiTransactionRepo extends JpaRepository<WeatherApiTransactionEntity, Long>  {

}
