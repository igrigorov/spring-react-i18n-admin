package com.example.l10nadmin.model;

import lombok.Data;

import java.util.List;

@Data    // = @ToString, @EqualsAndHashCode, @Getter, @Setter and @RequiredArgsConstructor
public class RequestUpdateEntryForm {

	boolean active;
	List<Locale> values;
}
