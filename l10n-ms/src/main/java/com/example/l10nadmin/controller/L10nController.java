package com.example.l10nadmin.controller;

import com.example.l10nadmin.service.L10nService;
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

import java.util.Map;

@RestController
@RequestMapping("/l10n")
@Api("Responsible for generic tasks, applicable to multiple sections of NDP")
@RequiredArgsConstructor
@Slf4j
public class L10nController {

	private final L10nService l10nService;

	@GetMapping("locale/{locale}")
	@ApiOperation("Retrieves the localization strings for the requested language")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<Map<String, String>> getLocalization(@PathVariable String locale) {
		LOG.info("Retrieve locale texts for {}", locale);
		return ResponseEntity.ok(l10nService.getLocalization(locale));
	}

	@GetMapping("l10n")
	@ApiOperation("Returns all localization entries")
	@ApiResponses(value = {@ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error")})
	public ResponseEntity<List<L10n>> getAllLocalization() {
		LOG.info("Retrieve all values");
		return ResponseEntity.ok(l10nRepository.findAll());
	}

	@PostMapping("l10n/entry")
	@ApiOperation("Creates a new entry")
	@ApiResponses(value = {@ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error")})
	public ResponseEntity postNewEntry(@RequestBody requestForm form) {
			LOG.info("Create new entry with value"+form.toString());
			l10nService.createNewEntry(form);
			return ResponseEntity.ok(true);
	}

	@PutMapping("l10n/entry/{id}")
	@ApiOperation("Replaces the entry with id")
	@ApiResponses(value = {@ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error")})
	public ResponseEntity<Boolean> replaceEntry(@PathVariable String id,@RequestBody requestForm form) {
			LOG.info("Replace existing entry id {} with value{}", id, form.toString());
			l10nService.updateEntry(id, form.getLocale(), form.getLic(), form.getValue(), form.isActive());
			return ResponseEntity.ok(true);
	}
}
