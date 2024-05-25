package com.wds.ship.repository;

import com.wds.ship.entity.ExportFCLDetails;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExportFCLRepository extends JpaRepository<ExportFCLDetails, Integer> {

    List<ExportFCLDetails> findByAction(ExportLCLDetailsAction action);

    List<ExportFCLDetails> findByActionAndCmpyAndBrnid(String action, Long company, Long branch);

    @Query(nativeQuery = true,value = "select a.* from PROC_Export_Customer_Service_FCL_DETAILS a where A.ACTION=:action and  A.withinsla>:withinsla")
    List<ExportFCLDetails> findByActionAndWithinsla(@Param("action") String action, @Param("withinsla")int withinsla);

    @Query(nativeQuery = true,value = "select a.* from PROC_Export_Customer_Service_FCL_DETAILS a where A.ACTION=:action and  A.outofsla>:outofsla")
    List<ExportFCLDetails> findByActionAndOutofsla(@Param("action") String action, @Param("outofsla")int outofsla);




}
