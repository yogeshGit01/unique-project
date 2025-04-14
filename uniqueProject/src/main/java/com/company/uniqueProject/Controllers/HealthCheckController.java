package com.company.uniqueProject.Controllers;

//import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/healthCheck")
@Slf4j
public class HealthCheckController {

	@GetMapping(value="/hi")
	public ResponseEntity<String> healthCheck() {
		log.info("inside health check controller: {}",Thread.activeCount());
		String hello = "Hello!! I am Up and Running :)";
		return new ResponseEntity<>(hello, HttpStatus.OK);
	}

//	@Value("${test.property}")
//	private String testProperty;

}
