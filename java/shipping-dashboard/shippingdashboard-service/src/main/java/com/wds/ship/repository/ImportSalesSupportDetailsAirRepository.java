package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ImportSalesSupportDetailsAir;

public interface ImportSalesSupportDetailsAirRepository extends JpaRepository<ImportSalesSupportDetailsAir, Long> {

	List<ImportSalesSupportDetailsAir> findByAction(String action);

}
