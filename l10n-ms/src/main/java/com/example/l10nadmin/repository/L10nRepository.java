package com.example.l10nadmin.repository;

import com.example.l10nadmin.domain.L10n;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

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
	@Query(value="update L10n set active=?5, locale=?2, lic=?3 ,value=?4 where id=?1", nativeQuery = true)
	void updateExistingEntry(Long id, String locale, String lic, String value, boolean active);

	@Modifying
	@Query(value="insert into L10n(locale, lic, value) values(?1,?2,?3)", nativeQuery = true)
	void insertNewEntry( String locale, String lic, String value);
}
