package com.example.l10nadmin.domain;

import io.swagger.annotations.ApiModelProperty;

public class requestForm {

	@ApiModelProperty(required = true)
	private String locale;

	@ApiModelProperty(required = true)
	private String lic;

	@ApiModelProperty(required = true)
	private String value;

	private boolean active;

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

	public String getLic() {
		return lic;
	}

	public void setLic(String lic) {
		this.lic = lic;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "requestForm{" +
				"locale='" + locale + '\'' +
				", lic='" + lic + '\'' +
				", value='" + value + '\'' +
				", active=" + active +
				'}';
	}

}
