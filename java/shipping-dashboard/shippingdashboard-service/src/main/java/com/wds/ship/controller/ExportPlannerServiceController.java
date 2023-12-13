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
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/export")
public class ExportPlannerServiceController {
	
	@Autowired
    ExportPlannerService exportPlannerService;
	
	@GetMapping("/getExportPlannerService")
    public List<ExportPlanner> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportPlannerService.getExportPlanner();
    }
   
    @PostMapping("/getExportPlannerServiceInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportPlannerService.getExportPlannerInfo(userDetails);
    }

}