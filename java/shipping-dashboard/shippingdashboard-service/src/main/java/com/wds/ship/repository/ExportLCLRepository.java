package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportLCLDetails;
<<<<<<< HEAD
//import com.wds.ship.shared.user.ExportLCL;

public interface ExportLCLRepository extends JpaRepository<ExportLCLDetails, Integer>{


	List<ExportLCLDetails> findByAction(String action);
=======
import com.wds.ship.shared.user.ExportLCL;

public interface ExportLCLRepository extends JpaRepository<ExportLCLDetails, Integer>{

	

	List<ExportLCLDetails> findAllByAction(String action);

	

	
>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95

	

}
