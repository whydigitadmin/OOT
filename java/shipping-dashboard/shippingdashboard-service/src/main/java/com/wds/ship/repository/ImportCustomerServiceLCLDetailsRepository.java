package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.entity.ImportCustomerServiceLCLDetails;
import com.wds.ship.shared.user.DetailsAction;

public interface ImportCustomerServiceLCLDetailsRepository extends JpaRepository<ImportCustomerServiceLCLDetails, Integer> {

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_import_Customer_Service_LCL_DETAILS a where A.ACTION=:action")
	List<ImportCustomerServiceLCLDetails> findByAction(String action);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_import_Customer_Service_LCL_DETAILS a where A.ACTION=:action and  A.withinsla>:withinsla")
	List<ImportCustomerServiceLCLDetails> findByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_import_Customer_Service_LCL_DETAILS a where A.ACTION=:action and  A.outofsla>:outofsla")
	List<ImportCustomerServiceLCLDetails> findByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

	
	


	

}
