package com.wds.ship.controller;

import com.wds.ship.service.lcl.export.CustomerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportCustomerServiceLCLController {

    @Autowired
    com.wds.ship.service.lcl.export.CustomerService customerService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/getCustomerServiceLCL")
    public List<CustomerServicePOJO> getInfo(@RequestBody UserDetails userDetails)
    {
        return customerService.getInfo(userDetails);

    }
}
