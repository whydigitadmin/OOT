package com.wds.ship.repository;

import com.wds.ship.entity.MasterCompanyDetails;
import com.wds.ship.entity.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MasterCompanyRepository  extends JpaRepository<MasterCompanyDetails, Long> {

}
