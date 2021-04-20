package com.example.l10nadmin.domain;

import lombok.Data;

import java.util.List;

@Data
public class requestUpdateEntryForm {

	boolean active;
	List<Locale> values;
}
