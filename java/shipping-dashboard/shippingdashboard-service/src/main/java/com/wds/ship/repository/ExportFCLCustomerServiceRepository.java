package com.wds.ship.repository;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportFCLCustomerServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExportFCLCustomerServiceRepository extends JpaRepository<ExportFCLCustomerServiceEntity, Long> {
    // You can add custom query methods here if needed.
}
