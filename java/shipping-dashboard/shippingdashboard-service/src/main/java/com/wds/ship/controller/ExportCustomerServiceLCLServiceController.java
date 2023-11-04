package com.wds.ship.controller;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.service.ExportCustomerServiceLCLService;
import com.wds.ship.service.UserService;
import com.wds.ship.shared.user.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api/v1/export")
public class ExportCustomerServiceLCLServiceController {

    @Autowired
    ExportCustomerServiceLCLService exportCustomerServiceLCLService;

    @GetMapping("/getCustomerServiceLCL")
    public List<ExportCustomerServiceLCL> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportCustomerServiceLCLService.getCustomerServiceLCLInfo();
    }
}
