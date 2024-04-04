package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportPlanner;

import java.util.List;

public interface ExportPlannerRepository extends JpaRepository<ExportPlanner, Long> {

    List<ExportPlanner> findByCompany(Long company);
}
