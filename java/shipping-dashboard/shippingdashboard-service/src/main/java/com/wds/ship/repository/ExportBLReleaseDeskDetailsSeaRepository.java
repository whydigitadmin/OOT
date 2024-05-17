package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wds.ship.entity.ExportBLReleaseDeskDetailsSea;

public interface ExportBLReleaseDeskDetailsSeaRepository extends JpaRepository<ExportBLReleaseDeskDetailsSea, Long> {

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from proc_export_bl_release_desk_details_sea a where A.ACTION=?1")
	List<ExportBLReleaseDeskDetailsSea> findByActionAndCompanyAndBranch(String action, Long company, Long branch);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from proc_export_bl_release_desk_details_sea a where A.ACTION=?1 and  A.withinsla>?2")
	List<ExportBLReleaseDeskDetailsSea> findByActionAndWithinsla(String action, int withinsla);

	@Query(nativeQuery = true,value = "select a.id,a.sno,a.dept,a.product,a.action,a.ref_no,a.ref_date,a.ref_type,a.ref_mode,a.withinsla,a.outofsla from proc_export_bl_release_desk_details_sea a where A.ACTION=?1 and  A.outofsla>?2")
	List<ExportBLReleaseDeskDetailsSea> findByActionAndOutofsla(String action, int outofsla);

}
