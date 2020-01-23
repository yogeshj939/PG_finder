package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PG_class {
	@Id
	private int id;
	private String pgName;
	private float rating;
	
	public int getId() {
		return id;
	}
	@Override
	public String toString() {
		return "PG_class [id=" + id + ", pgName=" + pgName + ", rating=" + rating + "]";
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPgName() {
		return pgName;
	}
	public void setPgName(String pgName) {
		this.pgName = pgName;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
}
