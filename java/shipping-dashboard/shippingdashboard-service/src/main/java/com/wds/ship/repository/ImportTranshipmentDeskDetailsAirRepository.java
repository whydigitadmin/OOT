package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ImportTranshipmentDeskDetailsAir;

public interface ImportTranshipmentDeskDetailsAirRepository  extends JpaRepository<ImportTranshipmentDeskDetailsAir, Long>{

	List<ImportTranshipmentDeskDetailsAir> findByAction(String action);

	
	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_IMPORT_TRANSHIPMENT_DESK_DETAILS_AIR a where A.ACTION=?1 and  A.withinsla>?2")
	List<ImportTranshipmentDeskDetailsAir> findAllByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from PROC_IMPORT_TRANSHIPMENT_DESK_DETAILS_AIR a where A.ACTION=?1 and  A.outofsla>?2")
	List<ImportTranshipmentDeskDetailsAir> findAllByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

	

}
