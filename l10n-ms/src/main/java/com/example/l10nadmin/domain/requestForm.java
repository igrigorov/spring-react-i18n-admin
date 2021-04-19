package com.example.l10nadmin.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data // = @ToString, @EqualsAndHashCode, @Getter, @Setter and @RequiredArgsConstructor
public class requestForm {

	@ApiModelProperty(required = true)
	private String locale;

	@ApiModelProperty(required = true)
	private String lic;

	@ApiModelProperty(required = true)
	private String value;

	private boolean active;

}
