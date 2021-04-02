package com.example.l10nadmin.repository;

import com.example.l10nadmin.domain.L10n;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
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

	List<L10n> findByLocaleAndActiveIsTrue(@Param("locale") String locale);

}
