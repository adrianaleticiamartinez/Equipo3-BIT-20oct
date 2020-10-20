package com.bit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bit.model.Cliente;


public interface clienteDAO extends JpaRepository<Cliente,String>{

}
