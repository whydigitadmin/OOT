package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ExportCustomerServiceDetailsAir;


public interface ExportCustomerServiceDetailsAirRepository extends JpaRepository<ExportCustomerServiceDetailsAir, Long> {
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_EXPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1 and A.Company=?2 and A.Branch=?3")
	List<ExportCustomerServiceDetailsAir> findByActionAndComapanyAndBranch(String action, Long comapany, Long branch);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_EXPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1 and  A.withinsla>?2")
	List<ExportCustomerServiceDetailsAir> findByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_EXPORT_CUSTOMER_SERVICE_DETAILS_air a where A.ACTION=?1 and  A.outofsla>?2")
	List<ExportCustomerServiceDetailsAir> findByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

}
