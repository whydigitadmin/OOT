package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ImportCustomerServiceFCL;

import java.util.List;

public interface ImportCustomerServiceFCLRepository extends JpaRepository<ImportCustomerServiceFCL, Long> {

    List<ImportCustomerServiceFCL> findByCompany(Long company);
}
