package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportSalesSupportSea;

import java.util.List;

public interface ExportSalesSupportSeaRepository extends JpaRepository<ExportSalesSupportSea, Long> {

    List<ExportSalesSupportSea> findByCompany(Long company);

    List<ExportSalesSupportSea> findByCompanyAndBranch(Long company, Long department);


}
