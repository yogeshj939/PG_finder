package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.PG_repo;
import com.example.demo.model.PG_class;


@RestController
public class PgController {
	@Autowired
	PG_repo  repository;
	
	@GetMapping("/pg")
	public List<PG_class> getPg(){
		return repository.findAll();
	}
	
}
