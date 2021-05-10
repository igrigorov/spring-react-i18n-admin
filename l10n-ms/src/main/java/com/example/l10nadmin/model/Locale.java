package com.example.l10nadmin.model;

import lombok.Data;

@Data    // = @ToString, @EqualsAndHashCode, @Getter, @Setter and @RequiredArgsConstructor
public class Locale {

	String localeName;
	String value;
}
