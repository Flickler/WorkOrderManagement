package com.example.springboot.dto;

import java.math.BigDecimal;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ChamadoDTO(@NotBlank String titulo, @NotBlank String descricao,
                         @NotBlank String funcionario, @NotNull boolean status) {
}
