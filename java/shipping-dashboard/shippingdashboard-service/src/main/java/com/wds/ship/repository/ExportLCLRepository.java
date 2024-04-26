package com.wds.ship.repository;

import java.util.List;

import com.wds.ship.shared.user.ExportOutofSla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.shared.user.ExportLCLDetailsAction;

public interface ExportLCLRepository extends JpaRepository<ExportLCLDetails, Integer>{

	List<ExportLCLDetails> findByAction(ExportLCLDetailsAction action);

	List<ExportLCLDetails> findByActionAndCompany(String action, Long company);

	List<ExportLCLDetails> findByActionAndCompanyAndBranch(String action, Long company, Long Branch);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla, a.cmpy from PROC_Export_Customer_Service_LCL_DETAILS a where A.ACTION=:action and  A.withinsla>:withinsla and  A.cmpy = :cmpy")
	List<ExportLCLDetails> findByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla , @Param("cmpy")Long cmpy);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla, a.cmpy from PROC_Export_Customer_Service_LCL_DETAILS a where A.ACTION=:action and  A.outofsla>:outofsla and A.cmpy = :cmpy")
	List<ExportLCLDetails> findByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla, @Param("cmpy") Long cmpy);

	//List<ExportLCLDetails> findByActionAndOutofsla(ExportOutofSla sla);

	
}
