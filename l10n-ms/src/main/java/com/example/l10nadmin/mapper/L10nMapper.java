package com.example.l10nadmin.mapper;

import com.example.l10nadmin.domain.L10n;
import com.example.l10nadmin.model.L10nDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface L10nMapper {

	List<L10nDto> toL10nDTOs(List<L10n> form);

	L10nDto toL10nDTO(L10n form);

	L10n toL10n(L10nDto form);
}
