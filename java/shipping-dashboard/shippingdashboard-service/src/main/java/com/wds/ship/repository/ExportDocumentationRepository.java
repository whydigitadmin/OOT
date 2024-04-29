package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportDocumentation;

import java.util.List;

public interface ExportDocumentationRepository extends JpaRepository<ExportDocumentation, Long> {
    List<ExportDocumentation> findByCompany(Long company);

    List<ExportDocumentation> findByCompanyAndBranchAndDeptid(Long company, Long branch, Long deptid);

}
