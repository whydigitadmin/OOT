package com.wds.ship.controller;



import com.wds.ship.service.export.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportLCLDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.UserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportController {

    @Autowired
    ExportService exportService;

    // @CrossOrigin(origins = "http://localhost:4200")
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getLCLCustomerServiceInfo(userDetails);

    }

    // @CrossOrigin(origins = "http://localhost:4200")
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getFCLCustomerServiceInfo(userDetails);

    }
    
 // @CrossOrigin(origins = "http://localhost:4200")
//    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//    @PostMapping("/getExportLCLDetails")
//    public List<ExportLCLDetailsPOJO> getExportLCLDetails(@RequestBody ExportLCL action)
//    {
//        return exportService.getExportLCLDetails(action);
//
//    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
<<<<<<< HEAD
    @GetMapping("/getExportLCLDetails")
    public List<ExportLCLDetailsPOJO> getExportLCLDetails(@RequestParam (value="action") String action)
=======
    @PostMapping("/getExportLCLDetails")
    public List<ExportLCLDetailsPOJO> getExportLCLDetails(@RequestBody ExportLCL action)
>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95
    {
        return exportService.getExportLCLDetails(action);

    }


}
