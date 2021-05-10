package com.example.l10nadmin.service;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.mapper.L10nMapper;
import com.example.l10nadmin.model.L10nDto;
import com.example.l10nadmin.model.Locale;
import com.example.l10nadmin.model.RequestUpdateEntryForm;
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

	public List<L10nDto> findAll() {
		return l10nMapper.toL10nDTOs(l10nRepository.findAll());
	}

	@Transactional
	public L10nDto createNewEntry(L10nDto form) {
		try {
			L10n newEntry = l10nMapper.toL10n(form);
			newEntry.setCreatedOn(LocalDateTime.now());
			newEntry.setModifiedOn(LocalDateTime.now());
			newEntry.setCreatedBy("SUPERPALAV");
			newEntry.setModifiedBy("SUPERPALAV");
			return l10nMapper.toL10nDTO(l10nRepository.save(newEntry));
		} catch (Exception e) {
			LOG.error("Error during creation of {}", form, e);
			throw e;
		}
	}

	@Transactional
	public void updateEntry(String lic, RequestUpdateEntryForm form) {
		try {
			for (Locale loc : form.getValues()) {
				l10nRepository.updateExistingEntry(lic, loc.getLocaleName(), loc.getValue(), form.isActive(), LocalDateTime.now());
			}
		} catch (Exception e) {
			LOG.error("Error during update of {}", form, e);
			throw e;
		}
	}
}
