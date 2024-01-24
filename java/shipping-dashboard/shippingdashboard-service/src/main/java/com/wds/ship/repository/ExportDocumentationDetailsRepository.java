package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ExportDocumentationDetails;
import com.wds.ship.shared.user.ExportLCL;

public interface ExportDocumentationDetailsRepository extends JpaRepository<ExportDocumentationDetails, Integer> {

	
	List<ExportDocumentationDetails> findAllByAction(String string);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_EXPORT_DOCUMENTATION_DETAILS a where A.ACTION=:action and  A.withinsla>:withinsla")
	List<ExportDocumentationDetails> findAllByActionAndWithinsla(String action, int withinsla);
	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_EXPORT_DOCUMENTATION_DETAILS a where A.ACTION=:action and  A.outofsla>:outofsla")
	List<ExportDocumentationDetails> findAllByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

	
	


	

	

}