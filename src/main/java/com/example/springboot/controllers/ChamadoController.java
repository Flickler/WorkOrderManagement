package com.example.springboot.controllers;

import java.util.List;
import java.util.UUID;

import com.example.springboot.model.ChamadoModel;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
	
    @DeleteMapping("chamado/{id}")
    public ResponseEntity<String> deleteChamado(@PathVariable Long id) {
    	chamadoRepository.deleteById(id);
    	return ResponseEntity.ok().body("Deletado");
    }
    
    @PutMapping("editar-chamado/{id}")
    public ResponseEntity<String> updateId(@RequestBody @Valid ChamadoDTO chamadoDTO, @PathVariable Long id) {
		chamadoRepository.deleteById(id);
    	
		var chamadoModel = new ChamadoModel();

		BeanUtils.copyProperties(chamadoDTO, chamadoModel);
		chamadoRepository.save(chamadoModel);
		
		return ResponseEntity.ok().body("Editado");
    }
    
}
