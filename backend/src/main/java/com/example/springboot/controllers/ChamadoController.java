package com.example.springboot.controllers;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

import com.example.springboot.dto.ApiDog;
import com.example.springboot.model.ChamadoModel;
import org.apache.coyote.Response;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.springboot.dto.ChamadoDTO;
import com.example.springboot.repositories.ChamadoRepository;
import org.springframework.web.client.RestTemplate;
import jakarta.validation.Valid;

@RestController
public class ChamadoController {

    @Autowired
    ChamadoRepository chamadoRepository;

    @CrossOrigin(origins = "*")
    @PostMapping("/chamado")
    public ResponseEntity<ChamadoModel> salvarChamado(@RequestBody @Valid ChamadoDTO chamadoDTO) {

        var chamadoModel = new ChamadoModel();

        BeanUtils.copyProperties(chamadoDTO, chamadoModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(chamadoRepository.save(chamadoModel));
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/chamado")
    public List<ChamadoModel> listarChamados() {
        return chamadoRepository.findAll();
    }

    /*
    @GetMapping("/produto")
    public ResponseEntity<Page<ProdutoModel>> listarProdutos(Pageable pageable){
        Page<ProdutoModel> produtos = produtoRepository.findAll(pageable);

        return ResponseEntity.ok().body(produtos);
    }*/
    @CrossOrigin(origins = "*")
    @GetMapping("/chamado/{id}")
    public ResponseEntity<ChamadoModel> listarChamadoId(@PathVariable(value = "id") Long id) {

        Optional<ChamadoModel> chamado = chamadoRepository.findById(id);

        if (chamado.isEmpty()) {
            //caso nao exista ele retorna não encontrado
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.status(HttpStatus.OK).body(chamado.get());
    }

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
    @PutMapping("chamado/{id}")
    public ResponseEntity<ChamadoModel> updateChamado(@RequestBody @Valid ChamadoDTO chamadoDTO, @PathVariable Long id) {
        // fazendo requisição pra api
        RestTemplate restTemplete = new RestTemplate();

        String ApiIndex = "https://random.dog/woof.json";

        String response = restTemplete.getForObject(ApiIndex, String.class);
        String url = response.substring(response.indexOf("\"url\":\"") + 7, response.lastIndexOf("\"}"));
        //

        System.out.println(url);
        Optional<ChamadoModel> novoChamado = chamadoRepository.findById(id);
        if (novoChamado.isPresent()) {
            ChamadoModel chamado = novoChamado.get();
            chamado.setTitulo(chamadoDTO.titulo());
            chamado.setDescricao(chamadoDTO.descricao());
            chamado.setFuncionario(chamadoDTO.funcionario());

            return ResponseEntity.status(HttpStatus.OK).body(chamadoRepository.save(chamado));
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


}
