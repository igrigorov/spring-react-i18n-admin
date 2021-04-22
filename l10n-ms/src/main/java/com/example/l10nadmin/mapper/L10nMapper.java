package com.example.l10nadmin.mapper;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.model.L10nDto;
import com.example.l10nadmin.model.RequestForm;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface L10nMapper {

	List<L10nDto> toL10nDTOs(List<L10n> form);

	L10nDto toL10nDTO(L10n form);

	L10n toL10n(RequestForm form);
}
