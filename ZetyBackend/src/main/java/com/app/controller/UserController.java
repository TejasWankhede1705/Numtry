package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDto;
import com.app.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	UserService service;
	
//	@PostMapping("/Add")
//	String AddStudent(StudentDto student) {
//		
//		return service.addNewStudent(student);
//	}
	
	@PostMapping("/add")
	ResponseEntity<?> addUser(@RequestBody UserDto user){
		
		return ResponseEntity.ok(service.addNewUser(user));
	}
	
	@GetMapping("/get")
	ResponseEntity<?>getAllDetails(){
		
		return ResponseEntity.ok(service.getAllUser()); 
	}
	
	@GetMapping("/getbyemail/{email}")
	ResponseEntity<?>getUserByEmail(@PathVariable String email){
		return ResponseEntity.ok(service.getUserDetailsByEmail(email));
	}
	
	@PutMapping("/id/{id}/email/{email}")
	ResponseEntity<?>updateemail(@PathVariable Long id, @PathVariable String email){
		
		
		return ResponseEntity.ok(service.updateUserdetails(id, email));
	}
	
	@DeleteMapping("/delete/{email}")
	ResponseEntity<?> deleteUser(@PathVariable String email){
		
		return ResponseEntity.ok(service.deleteByEmail(email));
	}
	
	
	@PutMapping("/update")
	ResponseEntity<?>updateAll(@RequestBody UserDto user ){
		return ResponseEntity.ok(service.updateAllDetails(user));
	}
}
