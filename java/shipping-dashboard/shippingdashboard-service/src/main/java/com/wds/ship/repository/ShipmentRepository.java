package com.wds.ship.repository;

import com.wds.ship.entity.Shipment;
import com.wds.ship.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

    @Query("SELECT s FROM Shipment s WHERE s.companyId = :companyId AND s.department = :department AND s.mode = :mode")
    List<Shipment> findShipments(@Param("companyId") Long companyId, @Param("department") Long department, @Param("mode") String mode );

    @Query("SELECT COUNT(s) FROM Shipment s WHERE s.companyId = :companyId AND s.department = :department AND s.mode = :mode")
    Long countShipments(@Param("companyId") Long companyId, @Param("department") Long department, @Param("mode") String mode );
}
