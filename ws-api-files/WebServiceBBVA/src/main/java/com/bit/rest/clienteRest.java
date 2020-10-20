package com.bit.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit.dao.clienteDAO;
import com.bit.model.Cliente;

@RestController
@RequestMapping("Cliente")
public class clienteRest {

	@Autowired
	private clienteDAO clienteD;
	
	@CrossOrigin
	@GetMapping("/listarClientes")
	public List<Cliente> listar(){
		
		return clienteD.findAll();
	}
	
	@CrossOrigin
	@RequestMapping("/listarClientesByID/{id}")
	public Optional<Cliente> listarID(@PathVariable("id") String id){
		
		return clienteD.findById(id);
	}
	
	
}
