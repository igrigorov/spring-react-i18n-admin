package com.example.l10nadmin;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import static org.hamcrest.Matchers.hasKey;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest()
@AutoConfigureMockMvc
class L10NApplicationTests {

	@Autowired
	private MockMvc mvc;


	@Test
	@DisplayName("GET all English entries: /locale/EN")
	public void getBgEntries() throws Exception {
		mvc.perform(get("/l10n/locale/en").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$").value(hasKey("test.test")));
	}

	@Test
	@DisplayName("GET all")
	public void getAllEntries() throws Exception {
		mvc.perform(get("/l10n/l10n").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON));
	}
	@Test
	@DisplayName("insert new entry")
	public void insertNewEntry() throws Exception {
		mvc.perform(post("/l10n/l10n/entry").contentType(MediaType.APPLICATION_JSON)
		.content("{\"locale\": \"GR\",\"lic\": \"test.third\",\"value\": \"test\" }"))
	.andExpect(status().isOk());}

	@Test
	@DisplayName("replace existing entry")
	public void replaceEntry() throws Exception {
		mvc.perform(put("/l10n/l10n/entry/7").contentType(MediaType.APPLICATION_JSON)
				.content("{\"locale\": \"EN\",\"lic\": \"test.third\",\"value\": \"test\", \"active\":true }"))
				.andExpect(status().isOk());}

}
