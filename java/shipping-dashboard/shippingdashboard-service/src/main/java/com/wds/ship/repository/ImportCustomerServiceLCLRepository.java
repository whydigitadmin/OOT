package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ImportCustomerServiceLCL;

import java.util.List;

public interface ImportCustomerServiceLCLRepository extends JpaRepository<ImportCustomerServiceLCL, Long> {

    List<ImportCustomerServiceLCL> findByCompany(Long company);

}
