-- Create Localization / Internationalization (i18n) table
CREATE TABLE L10n (
	id          BIGSERIAL PRIMARY KEY,
	locale      VARCHAR(3)    NOT NULL,
	lic         VARCHAR(255)  NOT NULL,
	value       VARCHAR(2048) NOT NULL,
	active      BOOLEAN DEFAULT TRUE,
	modifiedOn TIMESTAMP  DEFAULT NOW(),
	modifiedBy VARCHAR(255)  NOT NULL  DEFAULT 'SUPERPALAV',
	createdOn  TIMESTAMP DEFAULT NOW(),
	createdBy  VARCHAR(255)  NOT NULL DEFAULT 'SUPERPALAV'
);

-- Add unique index on lic / lang

CREATE UNIQUE INDEX L10N_locale_lic ON L10n(locale, lic);

