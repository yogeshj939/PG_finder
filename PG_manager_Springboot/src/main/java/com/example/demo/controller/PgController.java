package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping(path = "/addPg", consumes = {"application/json"})
	public String addPg(@RequestBody PG_class pg) {
		System.out.println(pg.toString());
		repository.save(pg);
		return "PG saved";
	}
	
}
