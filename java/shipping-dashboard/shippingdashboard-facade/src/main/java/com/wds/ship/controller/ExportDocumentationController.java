package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.service.export.ExportDocumentationService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportDocumentationController {
	
	@Autowired
	ExportDocumentationService exportdocumentationservice;
	

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationServiceInfo")
    public List<CustomerServicePOJO> getExportDocumgetExportDocumentationServiceInfoentationServiceInfo(@RequestBody UserDetails userDetails)
    {
        return exportdocumentationservice.getExportDocumentationServiceInfo(userDetails);

    }
    
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationServiceCount")
    public List<ExportDetailsPOJO> getExportDocumentationServiceCount(@RequestBody ExportLCL action)
    {
        return exportdocumentationservice.getExportDocumentationServiceCount(action);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationServicewithinsla")
    public List<ExportDetailsPOJO> getExportDocumentationServiceWithinsla(@RequestBody ExportWithinsla sla)
    {
        return exportdocumentationservice.getExportDocumentationServiceWithinsla(sla);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationServiceOutofsla")
    public List<ExportDetailsPOJO> getExportDocumentationServiceOutofsla(@RequestBody ExportOutofSla sla)
    {
        return exportdocumentationservice.getExportDocumentationServiceOutofsla(sla);

    }
    
    // Air Export Documentation
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationServiceAirInfo")
    public List<CustomerServicePOJO> getExportDocumentationServiceAirInfo(@RequestBody UserDetails userDetails)
    {
        return exportdocumentationservice.getExportDocumentationServiceAirInfo(userDetails);

    }
    
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationAirCount")
    public List<ExportDetailsPOJO> getExportDocumentationAirCount(@RequestBody ExportLCL action)
    {
        return exportdocumentationservice.getExportDocumentationAirCount(action);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationAirWithinsla")
    public List<ExportDetailsPOJO> getExportDocumentationAirWithinsla(@RequestBody ExportWithinsla sla)
    {
        return exportdocumentationservice.getExportDocumentationAirWithinsla(sla);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"})
    @PostMapping("/getExportDocumentationAirOutofsla")
    public List<ExportDetailsPOJO> getExportDocumentationAirOutofsla(@RequestBody ExportOutofSla sla)
    {
        return exportdocumentationservice.getExportDocumentationAirOutofsla(sla);

    }
    

}
