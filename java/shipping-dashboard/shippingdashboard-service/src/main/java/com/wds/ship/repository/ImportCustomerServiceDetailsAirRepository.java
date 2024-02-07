package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ImportCustomerServiceDetailsAir;

public interface ImportCustomerServiceDetailsAirRepository extends JpaRepository<ImportCustomerServiceDetailsAir, Long> {

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_IMPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1")
	List<ImportCustomerServiceDetailsAir> findByAction(String action);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_IMPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1 and  A.withinsla>?2")
	List<ImportCustomerServiceDetailsAir> findAllByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_IMPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1 and  A.outofsla>?2")
	List<ImportCustomerServiceDetailsAir> findAllByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

	

	
}
