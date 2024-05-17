package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportFCLCustomerServiceEntity;

public interface ExportFCLCustomerServiceRepository extends JpaRepository<ExportFCLCustomerServiceEntity, Long> {
    // You can add custom query methods here if needed.

    List<ExportFCLCustomerServiceEntity> findByCompany(Long company);

    //List<ExportFCLCustomerServiceEntity> findByCompanyAndBranch(Long company, Long branch);

	List<ExportFCLCustomerServiceEntity> findByCompanyAndBranch(Long selectedCompany, Long homeBranch);

}
