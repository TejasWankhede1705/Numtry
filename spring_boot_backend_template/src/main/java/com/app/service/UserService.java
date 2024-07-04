package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.etities.User;

public interface UserService {
	
	
		User addNewUser(User user);
}
