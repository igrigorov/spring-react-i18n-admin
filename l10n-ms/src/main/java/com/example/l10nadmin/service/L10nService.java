package com.example.l10nadmin.service;

import com.example.l10nadmin.domain.*;
import com.example.l10nadmin.mapper.L10nMapper;
import com.example.l10nadmin.repository.L10nRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class L10nService {

	/*
	 * Repositories
	 */
	private final L10nRepository l10nRepository;
	private final L10nMapper l10nMapper;

	/**
	 * Returns the localization entries for the requested locale
	 */
	public Map<String, String> getLocalization(String locale) {
		return l10nRepository.findByLocaleAndActiveIsTrue(locale.toUpperCase())
				.stream()
				.collect(Collectors.toMap(L10n::getLic, L10n::getValue));
	}

	public List<L10n> findAll() {
		return l10nRepository.findAll();
	}

	@Transactional
	public L10nDto createNewEntry(requestForm form) {
		try {
			L10n newEntry = new L10n();
			newEntry.setValue(form.getValue());
			newEntry.setLocale(form.getLocale());
			newEntry.setActive(form.isActive());
			newEntry.setLic(form.getLic());
			newEntry.setCreatedOn(LocalDateTime.now());
			newEntry.setModifiedOn(LocalDateTime.now());
			newEntry.setCreatedBy("SUPERPALAV");
			newEntry.setModifiedBy("SUPERPALAV");
			return l10nMapper.toL10nDTO(l10nRepository.save(newEntry));
		} catch (Exception e) {
			LOG.error("Error during save {}:", e);
			throw e;
		}
	}

	@Transactional
	public void updateEntry(String lic, requestUpdateEntryForm form) {
		try {
			for (Locale loc : form.getValues()) {
				l10nRepository.updateExistingEntry(lic, loc.getLocaleName(), loc.getValue(), form.isActive(), LocalDateTime.now());
			}
		} catch (Exception e) {
			LOG.error("Error during update {}:", e);
			throw e;
		}
	}
}
