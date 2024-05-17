package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.entity.ExportPlanner;
import com.wds.ship.service.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/export")
public class ExportPlannerServiceController {
	
	@Autowired
    ExportPlannerService exportPlannerService;
	
	// Sea Export Planner
	@GetMapping("/getExportPlannerService")
    public List<ExportPlanner> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportPlannerService.getExportPlanner();
    }
   
    @PostMapping("/getExportPlannerServiceInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportPlannerService.getExportPlannerInfo(userDetails);
    }

//    @PostMapping("/getExportPlannerServiceCount")
//    public List<ExportDetailsPOJO>getExportDocumentationDetailsCount(@RequestBody DetailsAction action){
//    	return exportPlannerService.getExportPlannerDetailsCount(action);
//    }
    
    @PostMapping("/getExportPlannerServiceWithinsla")
    public List<ExportDetailsPOJO>getExportDocumentationDetailsWithinsla(@RequestBody DetailsAction sla){
    	return exportPlannerService.getExportPlannerDetailsWithinsla(sla);
    }
    
    @PostMapping("/getExportPlannerServiceOutofsla")
    public List<ExportDetailsPOJO>getExportDocumentationDetailsOutofsla(@RequestBody DetailsAction sla){
    	return exportPlannerService.getExportPlannerDetailsOutofsla(sla);
    }
    
    // Air Export planner
    
    @PostMapping("/getExportPlannerServiceAirInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceAirInfo(@RequestBody UserDetails userDetails) {
        return exportPlannerService.getExportPlannerAirInfo(userDetails);
    }

   @PostMapping("/getExportPlannerAirCount")
   public List<ExportDetailsPOJO>getExportDocumentationAirDetailsCount(@RequestBody ExportLCL action){
   	return exportPlannerService.getExportPlannerAirDetailsCount(action);
  }
    
    @PostMapping("/getExportPlannerAirWithinsla")
    public List<ExportDetailsPOJO>getExportDocumentationAirDetailsWithinsla(@RequestBody DetailsAction sla){
    	return exportPlannerService.getExportPlannerAirDetailsWithinsla(sla);
    }
    
    @PostMapping("/getExportPlannerAirOutofsla")
    public List<ExportDetailsPOJO>getExportDocumentationAirDetailsOutofsla(@RequestBody DetailsAction sla){
    	return exportPlannerService.getExportPlannerAirDetailsOutofsla(sla);
    }
}
