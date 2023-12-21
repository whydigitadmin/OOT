package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportPlanner;

public interface ExportPlannerRepository extends JpaRepository<ExportPlanner, Long> {
	
	  // You can add custom query methods here if needed.
}
