package com.example.springboot.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.springboot.model.ChamadoModel;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springboot.dto.ChamadoDTO;
import com.example.springboot.repositories.ChamadoRepository;

import jakarta.validation.Valid;

@RestController
public class ChamadoController {

	@Autowired
	ChamadoRepository chamadoRepository;
	
	@PostMapping("/chamado")
	public ResponseEntity<ChamadoModel> salvarChamado(@RequestBody @Valid ChamadoDTO chamadoDTO) {

		var chamadoModel = new ChamadoModel();

		BeanUtils.copyProperties(chamadoDTO, chamadoModel);

		return ResponseEntity.status(HttpStatus.CREATED).body(chamadoRepository.save(chamadoModel));
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/chamado")
	public List<ChamadoModel> listarProdutos(){
		return chamadoRepository.findAll();
	}
	/*
	@GetMapping("/produto")
	public ResponseEntity<Page<ProdutoModel>> listarProdutos(Pageable pageable){
		Page<ProdutoModel> produtos = produtoRepository.findAll(pageable);
		
		return ResponseEntity.ok().body(produtos);
	}*/
	@CrossOrigin(origins = "*")
    @DeleteMapping("chamado/{id}")
    public ResponseEntity<Object> deleteChamado(@PathVariable(value = "id") Long id) {
		Optional<ChamadoModel> chamado = chamadoRepository.findById(id);

		if (chamado.isEmpty()) {
			//caso nao exista ele retorna não encontrado
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT_FOUND");
		}
		chamadoRepository.deleteById(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body("");
    }
	@CrossOrigin(origins = "*")
    @PutMapping("editar-chamado/{id}")
    public ResponseEntity<ChamadoModel> updateChamado(@RequestBody @Valid ChamadoDTO chamadoDTO,  @PathVariable Long id) {
		Optional<ChamadoModel> novoChamado = chamadoRepository.findById(id);

		if (novoChamado.isPresent()){
			ChamadoModel chamado = novoChamado.get();
			chamado.setTitulo(chamadoDTO.titulo());
			chamado.setDescricao(chamadoDTO.descricao());
			chamado.setFuncionario(chamadoDTO.funcionario());
			return ResponseEntity.status(HttpStatus.OK).body(chamadoRepository.save(chamado));
		} else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

	// Esse é pra mudar o status do chamado no banco
	/*
	@CrossOrigin(origins = "*")
	@PutMapping("finalizar-chamado/{id}")
	public ResponseEntity<Object> changeStatus(@RequestBody @Valid ChamadoDTO chamadoDTO, @PathVariable Long id){
		Optional<ChamadoModel> chamado = chamadoRepository.findById(id);
		var chamadoModel = new ChamadoModel();
		BeanUtils.copyProperties(chamadoDTO, chamadoModel);
		chamadoModel.setStatus(false);
		chamadoRepository.save(chamadoModel);
		return ResponseEntity.status(HttpStatus.OK).body(chamadoDTO);
	} AINDA NÃO FUNCIONANDO */
}
