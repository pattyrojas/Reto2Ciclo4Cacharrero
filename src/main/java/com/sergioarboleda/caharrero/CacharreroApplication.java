package com.sergioarboleda.caharrero;

import com.sergioarboleda.caharrero.app.repositories.crud.CloneCrudRepository;
import com.sergioarboleda.caharrero.app.repositories.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CacharreroApplication implements CommandLineRunner {

@Autowired
private CloneCrudRepository cloneRepository;

@Autowired
private UserCrudRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(CacharreroApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
        userRepository.deleteAll();
        
    }

}
