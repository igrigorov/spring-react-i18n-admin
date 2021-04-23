package com.example.l10nadmin.model;

import lombok.Data;

import java.util.List;

@Data
public class RequestUpdateEntryForm {

	boolean active;
	List<Locale> values;
}
