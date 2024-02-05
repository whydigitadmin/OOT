package com.wds.ship.controller;



import com.wds.ship.service.export.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
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
	

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerServiceInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportplannerservice.getExportPlannerInfo(userDetails);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerServiceCount")
    public List<ExportDetailsPOJO> getExportPlannerServiceCount(@RequestBody ExportLCL action)
    {
        return exportplannerservice.getExportPlannerServiceCount(action);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerServicewithinsla")
    public List<ExportDetailsPOJO> getExportPlannerServiceWithinsla(@RequestBody ExportWithinsla sla)
    {
        return exportplannerservice.getExportPlannerServiceWithinsla(sla);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerServiceOutofsla")
    public List<ExportDetailsPOJO> getExportPlannerServiceOutofsla(@RequestBody ExportOutofSla sla)
    {
        return exportplannerservice.getExportPlannerServiceOutofsla(sla);

    }
    
    
    // Air Export 
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerServiceAirInfo")
    public List<CustomerServicePOJO> getExportPlannerServiceAirInfo(@RequestBody UserDetails userDetails)
    {
        return exportplannerservice.getExportPlannerAirInfo(userDetails);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerAirCount")
    public List<ExportDetailsPOJO> getExportPlannerAirCount(@RequestBody ExportLCL action)
    {
        return exportplannerservice.getExportPlannerAirCount(action);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerAirWithinsla")
    public List<ExportDetailsPOJO> getExportPlannerAirWithinsla(@RequestBody ExportWithinsla sla)
    {
        return exportplannerservice.getExportPlannerAirWithinsla(sla);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getExportPlannerAIrOutofsla")
    public List<ExportDetailsPOJO> getExportPlannerAirOutofsla(@RequestBody ExportOutofSla sla)
    {
        return exportplannerservice.getExportPlannerAirOutofsla(sla);

    }
}
