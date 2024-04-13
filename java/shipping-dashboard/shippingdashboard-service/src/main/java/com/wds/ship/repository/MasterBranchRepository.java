package com.wds.ship.repository;

import com.wds.ship.entity.MasterBranchDetails;
import com.wds.ship.entity.MasterCompanyDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MasterBranchRepository  extends JpaRepository<MasterBranchDetails, Long> {
}
