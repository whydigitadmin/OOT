package com.wds.ship.repository;

import com.wds.ship.entity.Enquiry;
import com.wds.ship.entity.Shipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {
    @Query("SELECT COUNT(e) FROM Enquiry e WHERE e.companyId = :companyId AND e.departmentId = :departmentId")
    Long countEnquiry(@Param("companyId") Long companyId, @Param("departmentId") Long departmentId);
}
