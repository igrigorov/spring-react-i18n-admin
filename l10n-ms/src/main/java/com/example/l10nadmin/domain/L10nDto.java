package com.example.l10nadmin.domain;

import lombok.Data;

@Data
public class L10nDto {

	private String locale;

	private String lic;

	private String value;

	private boolean active;

	private long id;
}
