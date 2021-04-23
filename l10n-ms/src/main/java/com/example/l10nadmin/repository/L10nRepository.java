package com.example.l10nadmin.repository;

import com.example.l10nadmin.domain.L10n;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Provides access to the {@link com.example.l10nadmin.domain.L10n} entity/table.
 *
 * @author Ivan Grigorov
 * @version 2021.04.02
 */
@Repository
public interface L10nRepository extends JpaRepository<L10n, Long> {

	List<L10n> findByLocaleAndActiveIsTrue(String locale);

	@Modifying
	@Query(value = "update L10n set active=?4, value=?3,modifiedOn=?5 where lic=?1 and locale=?2", nativeQuery = true)
	void updateExistingEntry(String lic, String locale, String value, boolean active, LocalDateTime time);

}
