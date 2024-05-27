package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ExportPlannerDetails;

public interface ExportPlannerDetailsRepo extends JpaRepository<ExportPlannerDetails, Integer> {


	
	@Query(nativeQuery = true,value = "select a.* from PROC_EXPORT_PLANNER_details a where A.ACTION=:action and  A.withinsla>:withinsla")
	List<ExportPlannerDetails> findByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);
	
	@Query(nativeQuery = true,value = "select a.* from PROC_EXPORT_PLANNER_details a where A.ACTION=:action and  A.outofsla>:outofsla")
	List<ExportPlannerDetails> findByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);

	List<ExportPlannerDetails> findAllByActionAndCompanyAndBranch(String action, Long company, Long branch);

}
