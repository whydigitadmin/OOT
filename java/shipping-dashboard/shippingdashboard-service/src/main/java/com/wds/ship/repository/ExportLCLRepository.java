package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.shared.user.ExportLCL;

public interface ExportLCLRepository extends JpaRepository<ExportLCLDetails, Integer>{

	

	List<ExportLCLDetails> findAllByAction(String action);

	

	

}
