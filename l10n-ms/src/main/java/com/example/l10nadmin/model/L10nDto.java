package com.example.l10nadmin.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class L10nDto {

	@ApiModelProperty(required = true)
	private String locale;

	@ApiModelProperty(required = true)
	private String lic;

	@ApiModelProperty(required = true)
	private String value;

	private boolean active;

	private long id;
}
