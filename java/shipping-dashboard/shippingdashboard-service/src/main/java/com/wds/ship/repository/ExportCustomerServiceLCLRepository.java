package com.wds.ship.repository;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportLCLDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExportCustomerServiceLCLRepository extends JpaRepository<ExportCustomerServiceLCL, Long> {
    // You can add custom query methods here if needed.

    List<ExportCustomerServiceLCL> findByCompany(Long company);

    List<ExportCustomerServiceLCL> findByCompanyAndBranchAndDeptid(Long company, Long branch, Long deptid);
}
