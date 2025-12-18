package com.projs.FeedFocusBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class HeadlinerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HeadlinerBackendApplication.class, args);
	}
	
}
