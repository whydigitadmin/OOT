package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.service.ExportDocumentationService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/export")
public class ExportDocumentationServiceController {
	
	@Autowired
    ExportDocumentationService exportDocumentService;
	
	@GetMapping("/getExportDocumentService")
    public List<ExportDocumentation> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportDocumentService.getExportDocumentation();
    }
   
    @PostMapping("/getExportDocumentServiceInfo")
    public List<CustomerServicePOJO> getExportDocumentServiceInfo(@RequestBody UserDetails userDetails) {
        return exportDocumentService.getExportDocumentationServiceInfo(userDetails);
    }
    
    @PostMapping("/getExportDocumentServiceCount")
    public List<ExportDetailsPOJO>getExportDocumentationDetailsCount(@RequestBody ExportLCL action){
    	return exportDocumentService.getExportDocumentationDetailsCount(action);
    }
    
    @PostMapping("/getExportDocumentServiceWithinsla")
    public List<ExportDetailsPOJO>getExportDocumentationDetailsWithinsla(@RequestBody ExportWithinsla sla){
    	return exportDocumentService.getExportDocumentationDetailsWithinsla(sla.getAction(),sla.getWithinsla());
    }
    
    @PostMapping("/getExportDocumentServiceOutofsla")
    public List<ExportDetailsPOJO>getExportDocumentationDetailsOutofsla(@RequestBody ExportOutofSla sla){
    	return exportDocumentService.getExportDocumentationDetailsOutofsla(sla.getAction(),sla.getOutofsla());
    }

}