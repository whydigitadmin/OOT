package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ExportBLReleaseDeskSea;

import java.util.List;

public interface ExportBLReleaseDeskSeaRepository extends JpaRepository<ExportBLReleaseDeskSea, Long> {
    List<ExportBLReleaseDeskSea> findByCompany(Long company);
}
