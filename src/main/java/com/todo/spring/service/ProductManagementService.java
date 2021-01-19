package com.todo.spring.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.todo.spring.domain.entity.ProductManagement;
import com.todo.spring.domain.repository.ProductRepository;
import com.todo.spring.dto.ProductSaveRequestDTO;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProductManagementService {
	private final ProductRepository productRepository;
	
	@Transactional
	public Long save(ProductSaveRequestDTO requestDTO) {
		System.out.println("requestDTO : " + requestDTO);
		System.out.println(requestDTO.getCustomers());
		return productRepository.save(requestDTO.toEntity()).getProduct_no();
	}
	
	public ProductManagement save(ProductManagement param) {
		productRepository.save(param);
		return param;
	}
}
