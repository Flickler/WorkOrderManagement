package com.example.springboot.repositories;

import com.example.springboot.model.ChamadoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.springboot.model.ChamadoModel;

@Repository
public interface ChamadoRepository extends JpaRepository<ChamadoModel, Long>{

}
