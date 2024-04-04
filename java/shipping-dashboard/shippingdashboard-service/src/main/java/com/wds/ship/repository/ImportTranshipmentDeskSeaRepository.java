package com.wds.ship.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wds.ship.entity.ImportTranshipmentDeskSea;

import java.util.List;

public interface ImportTranshipmentDeskSeaRepository extends JpaRepository<ImportTranshipmentDeskSea, Long> {
    List<ImportTranshipmentDeskSea> findByCompany(Long company);
}
