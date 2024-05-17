package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportSalesSupportDetailsAir;

public interface ExportSalesSupportDetailsAirRepository extends JpaRepository<ExportSalesSupportDetailsAir, Long> {

	List<ExportSalesSupportDetailsAir> findByActionAndCompanyAndBranch(String action, Long company, Long branch);

}
