package com.todo.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.todo.spring.domain.entity.ProductManagement;
import com.todo.spring.domain.repository.ProductRepository;
import com.todo.spring.dto.ProductSaveRequestDTO;

@Service
public class ProductManagementService {
	private final ProductRepository productRepository;
	
	public ProductManagementService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	// 생산관리 테이블 조회
	@Transactional
	public List<ProductManagement> getProductManagementList() {
		List<ProductManagement> productManagements = productRepository.findAll();
		return productManagements;
	}
	
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
