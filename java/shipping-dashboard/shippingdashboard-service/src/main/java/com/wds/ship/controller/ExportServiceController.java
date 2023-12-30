package com.wds.ship.controller;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportLCLDetailsSLA;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/v1/export")
public class ExportServiceController {

    @Autowired
    ExportService exportCustomerServiceLCLService;
    

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
    
    @PostMapping("/exportlcldetails")
    public List<ExportDetailsPOJO>getAllLCL(@RequestBody ExportLCLDetailsAction action){
    	return exportCustomerServiceLCLService.getAllLCLDetails(action);
    }
    
//    @GetMapping("/exportlcldetails")
//    public List<ExportDetailsPOJO>getAllLCL(@RequestParam(value="action")String action){
//    	return exportCustomerServiceLCLService.getAllLCLDetails(action);
//    }
    
//    @GetMapping("/exportlcldetailswihtinsla")
//    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestParam(value="action")String action,@RequestParam(value="withinsla")int withinsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsWithinSla(action, withinsla);
//    }
    
      @PostMapping("/exportlcldetailswihtinsla")
      public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestBody ExportLCLDetailsSLA sla){
    	  return exportCustomerServiceLCLService.getExportLCLDetailsWithinSla(sla.getAction(),sla.getWithinsla());
      }
    
    @GetMapping("/exportlcldetailsoutofsla")
    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(@RequestParam(value="action")String action,@RequestParam(value="outofsla")int outofsla){
    	return exportCustomerServiceLCLService.getExportLCLDetailsOutofSla(action, outofsla);
    }
    
    
}
