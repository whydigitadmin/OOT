package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ImportSalesSupportSeaDetails;

public interface ImportSalesSupportSeaDetailsRepository extends JpaRepository<ImportSalesSupportSeaDetails, Long> {

	List<ImportSalesSupportSeaDetails> findByAction(String action);

}
