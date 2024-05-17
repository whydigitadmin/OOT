package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportSalesSupportSeaDetails;

public interface ExportSalesSupportSeaDetailsRepository extends JpaRepository<ExportSalesSupportSeaDetails, Long>{

	List<ExportSalesSupportSeaDetails> findByActionAndCompanyAndBrnid(String action, Long company, Long brnid);

}
