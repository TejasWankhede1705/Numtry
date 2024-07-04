package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.etities.User;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	private UserDao dao;
	
	
	@Override
	public User addNewUser(User user) {
		
		return dao.save(user); 
	}

}
