package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.shared.user.ExportLCLDetailsAction;

public interface ExportLCLRepository extends JpaRepository<ExportLCLDetails, Integer>{

	List<ExportLCLDetails> findByAction(ExportLCLDetailsAction action);

	List<ExportLCLDetails> findByAction(String action);

}
