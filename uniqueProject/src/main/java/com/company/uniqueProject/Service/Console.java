package com.company.uniqueProject.Service;

import org.springframework.stereotype.Service;

@Service
public class Console {
	
	public  void log(Object obj) {
		System.out.println(obj.toString());
	}

}
