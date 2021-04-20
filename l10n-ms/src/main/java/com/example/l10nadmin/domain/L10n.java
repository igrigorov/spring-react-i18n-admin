package com.example.l10nadmin.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Represents the L10n table in the DB, which in turn represents Localization entries for all languages supported by the application
 *
 * @author Ivan Grigorov
 * @version 2021.04.02
 */
@Entity
@Data    // = @ToString, @EqualsAndHashCode, @Getter, @Setter and @RequiredArgsConstructor
public class L10n {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "L10n_id_generator")
	@SequenceGenerator(name = "L10n_id_generator", sequenceName = "L10n_id_seq", allocationSize = 1)
	private long id;

	/**
	 * Language code of the l10n entry, e.g. EN, BG
	 */
	@Column
	private String locale;
	/**
	 * Language Independent Code of the l10n entry
	 */
	@Column
	private String lic;
	@Column
	private String value;
	/**
	 * Whether the entry is active or not (if not, will not be returned by the app
	 */
	@Column
	private boolean active;

	/**
	 * Username of the person who created the entry (XXX : needs some sort of authentication)
	 */
	@Column
	private String createdBy;
	/**
	 * Timestamp when the entry was created
	 */
	@Column
	private LocalDateTime createdOn;
	/**
	 * Username of the person who last modified the entry (XXX : needs some sort of authentication)
	 */
	@Column
	private String modifiedBy;
	/**
	 * Timestamp when the entry was last modified
	 */
	@Column
	private LocalDateTime modifiedOn;

}
