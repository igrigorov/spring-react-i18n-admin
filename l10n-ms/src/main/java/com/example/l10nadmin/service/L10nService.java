package com.example.l10nadmin.service;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.domain.requestForm;
import com.example.l10nadmin.repository.L10nRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class L10nService {

	/*
	 * Repositories
	 */
	private final L10nRepository l10nRepository;

	/**
	 * Returns the localization entries for the requested locale
	 */
	public Map<String, String> getLocalization(String locale) {
		return l10nRepository.findByLocaleAndActiveIsTrue(locale.toUpperCase())
				.stream()
				.collect(Collectors.toMap(L10n::getLic, L10n::getValue));
	}

	@Transactional
	public void createNewEntry (requestForm form){
	try {
		l10nRepository.insertNewEntry(form.getLocale(), form.getLic(), form.getValue());
	}catch(Exception e) {
		LOG.error("Error during save {}:",e);
		throw e;
		}
	}
	@Transactional
	public void updateEntry ( String id,String locale, String lic, String value, boolean active){
		try {
			l10nRepository.updateExistingEntry(Long.parseLong(id), locale, lic, value, active);
		}catch (Exception e){
			LOG.error("Error during update {}:",e);
			throw e;
		}
	}
}
