package com.example.l10nadmin.controller;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.repository.L10nRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/l10n")
@Api("Responsible for generic tasks, applicable to multiple sections of NDP")
@RequiredArgsConstructor
@Slf4j
public class L10nController {

	private final L10nRepository l10nRepository;

	@GetMapping("locale/{locale}")
	@ApiOperation("Retrieves the localization strings for the requested language")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<List<L10n>> getLocalization(@PathVariable String locale) {
		LOG.info("Retrieve locale texts for {}", locale);
		return ResponseEntity.ok(l10nRepository.findByLocaleAndActiveIsTrue(locale));
	}
}
