package com.example.l10nadmin.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping
@Api("Responsible for generic tasks, applicable to multiple sections of NDP")
@RequiredArgsConstructor
@Slf4j
public class L10nController {

	//private static final Logger LOG = LoggerFactory.getLogger(L10nController.class);
	//private final SystemService systemService;

	@GetMapping("/l10n/{locale}")
	@ApiOperation("Retrieves the localization strings for the requested language")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Successful"),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 500, message = "System Error") })
	public ResponseEntity<Map<String, String>> getLocalization(@PathVariable String locale) {
		LOG.info("Retrieve locale texts for {}", locale);
		return ResponseEntity.ok(new HashMap<>());
	}
}
