package com.example.l10nadmin.service;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.repository.L10nRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
