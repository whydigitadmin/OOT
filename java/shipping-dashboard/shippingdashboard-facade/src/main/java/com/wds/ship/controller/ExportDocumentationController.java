package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.service.ExportDocumentationService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportDocumentationController {
	
	@Autowired
	ExportDocumentationService exportdocumentationservice;
	
	@CrossOrigin(origins = "http://localhost:4200")
	//@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://54.254.131.225"})
    @PostMapping("/getExportDocumentationServiceInfo")
    public List<CustomerServicePOJO> getExportDocumentationServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportdocumentationservice.getExportDocumentationServiceInfo(userDetails);

    }

}
