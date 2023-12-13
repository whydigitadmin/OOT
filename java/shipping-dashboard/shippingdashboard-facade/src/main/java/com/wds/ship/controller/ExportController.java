package com.wds.ship.controller;



import com.wds.ship.service.export.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportController {

    @Autowired
    ExportService exportService;

    @CrossOrigin(origins = "http://localhost:4200")
    //@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://54.254.131.225"})
    @PostMapping("/getLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getLCLCustomerServiceInfo(userDetails);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    //@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://54.254.131.225"})
    @PostMapping("/getFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getFCLCustomerServiceInfo(userDetails);

    }


}
