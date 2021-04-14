package com.example.l10nadmin.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Represents the L10n table in the DB, which in turn represents Localization entries for all languages supported by the application
 *
 * @author Ivan Grigorov
 * @version 2021.04.02
 */
@Entity
@Table(name = "L10n")
@Data	// = @ToString, @EqualsAndHashCode, @Getter, @Setter and @RequiredArgsConstructor
public class L10n {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	/** Language code of the l10n entry, e.g. EN, BG */
	@Column(name="locale")
	private String locale;
	/** Language Independent Code of the l10n entry */
	@Column(name="lic")
	private String lic;
	@Column(name="value")
	private String value;
	/** Whether the entry is active or not (if not, will not be returned by the app */
	@Column(name="active")
	private boolean active;

	/** Username of the person who created the entry (XXX : needs some sort of authentication) */
	@Column(name="createdBy")
	private String createdBy;
	/** Timestamp when the entry was created */
	@Column(name="createdOn")
	private LocalDateTime createdOn;
	/** Username of the person who last modified the entry (XXX : needs some sort of authentication) */
	@Column(name="modifiedBy")
	private String modifiedBy;
	/** Timestamp when the entry was last modified */
	@Column(name="modifiedOn")
	private LocalDateTime modifiedOn;

	public L10n(String locale, String lic, String value) {
		this.locale = locale;
		this.lic = lic;
		this.value = value;
	}

	public L10n() {
	}
}
