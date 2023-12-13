package com.wds.ship.controller;


import com.wds.ship.service.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportPlannerController {
	
	@Autowired
	ExportPlannerService exportplannerservice;
	
	@CrossOrigin(origins = "http://localhost:4200")
	//@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://54.254.131.225"})
    @PostMapping("/getExportPlannerServiceInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportplannerservice.getExportPlannerInfo(userDetails);

    }
}
