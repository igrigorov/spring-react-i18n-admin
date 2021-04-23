package com.example.l10nadmin.controller;

import com.example.l10nadmin.model.L10nDto;
import com.example.l10nadmin.model.RequestUpdateEntryForm;
import com.example.l10nadmin.service.L10nService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"), @ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<Map<String, String>> getLocalization(@PathVariable String locale) {
		LOG.info("Retrieve locale texts for {}", locale);
		return ResponseEntity.ok(l10nService.getLocalization(locale));
	}

	@GetMapping("l10n")
	@ApiOperation("Returns all localization entries")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"), @ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<List<L10nDto>> getAllLocalization() {
		LOG.info("Retrieve all values");
		return ResponseEntity.ok(l10nService.findAll());
	}

	@PostMapping("l10n/entry")
	@ApiOperation("Creates a new entry")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"), @ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<L10nDto> postNewEntry(@RequestBody L10nDto form) {
		LOG.info("Create new entry with value" + form.toString());
		return ResponseEntity.ok(l10nService.createNewEntry(form));
	}

	@PutMapping("l10n/entry/{lic}")
	@ApiOperation("Replaces the entry with id")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"), @ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<Boolean> replaceEntry(@PathVariable String lic, @RequestBody RequestUpdateEntryForm form) {
		LOG.info("Replace existing entry lic {} with value{}", lic, form.toString());
		l10nService.updateEntry(lic, form);
		return ResponseEntity.ok(true);
	}
}
