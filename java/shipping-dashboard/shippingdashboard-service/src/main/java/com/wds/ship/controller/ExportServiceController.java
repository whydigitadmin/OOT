package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.repository.ExportLCLRepository;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportLCLDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
<<<<<<< HEAD
//import com.wds.ship.shared.user.ExportLCL;
=======
>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95
import com.wds.ship.shared.user.UserDetails;
@RestController
@RequestMapping("/api/v1/export")
public class ExportServiceController {

    @Autowired
    ExportService exportCustomerServiceLCLService;
    
    @Autowired
    ExportLCLRepository repo;

    @GetMapping("/getCustomerServiceLCL1")
    public List<ExportCustomerServiceLCL> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportCustomerServiceLCLService.getCustomerServiceLCLInfo();
    }

    @PostMapping("/getCustomerServiceLCL")
    public List<CustomerServicePOJO> getInfo(@RequestBody UserDetails userDetails) {
        return exportCustomerServiceLCLService.getLCLCustomerServiceInfo(userDetails);
    }

    @PostMapping("/getLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportCustomerServiceLCLService.getLCLCustomerServiceInfo(userDetails);
    }

    @PostMapping("/getFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportCustomerServiceLCLService.getFCLCustomerServiceInfo(userDetails);
    }
    
<<<<<<< HEAD
//    @PostMapping("/exportlcldetails")
//    public List<ExportLCLDetailsPOJO> getAllLCL(@RequestBody ExportLCL exportLCL){
//    	return exportCustomerServiceLCLService.getAllLCLDetails(exportLCL);
//    }
    
    @GetMapping("/exportlcldetails")
    public List<ExportLCLDetailsPOJO> getAllLCL(@RequestParam(value="action") String action){
    	return exportCustomerServiceLCLService.getAllLCLDetails(action);
   }
=======
    @PostMapping("/exportlcldetails")
    public List<ExportLCLDetailsPOJO> getAllLCL(@RequestBody ExportLCL exportLCL){
    	return exportCustomerServiceLCLService.getAllLCLDetails(exportLCL);
    }
>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95
}
