package com.wds.ship.controller;



import com.wds.ship.service.export.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;
//import com.wds.ship.shared.user.ExportLCLDetailsAction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportController {

    @Autowired
    ExportService exportService;

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getLCLCustomerServiceInfo(userDetails);

    }

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getFCLCustomerServiceInfo(userDetails);

    }
    

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportLCLDetails")
    public List<ExportDetailsPOJO> getExportLCLDetails(@RequestBody ExportLCLDetailsAction action)
    {
        return exportService.getExportLCLDetails(action);

    }
    
//    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//    @GetMapping("/getExportLCLDetails")
//    public List<ExportDetailsPOJO> getExportLCLDetails(@RequestParam(value="action") String action)
//    {
//        return exportService.getExportLCLDetails(action);
//
//    }
    

  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportLCLDetailsWithinsla")
  public List<ExportDetailsPOJO> getExportLCLDetailsWithinsla(@RequestBody ExportWithinsla sla)
  {
      return exportService.getExportLCLDetailsWithinsla(sla);

  }
  

  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportLCLDetailsOutofsla")
  public List<ExportDetailsPOJO> getExportLCLDetailsOutofsla(@RequestBody ExportOutofSla sla)
  {
      return exportService.getExportLCLDetailsOutofsla(sla);

  }
  



}
