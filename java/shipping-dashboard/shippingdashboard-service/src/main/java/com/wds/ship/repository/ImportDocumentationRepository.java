package com.wds.ship.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wds.ship.entity.ImportDocumentation;

public interface ImportDocumentationRepository extends JpaRepository<ImportDocumentation, Long> {

	
	

}
