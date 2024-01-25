package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.wds.ship.service.export.ImportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/facade/import")
public class ImportController {
	
	@Autowired
    ImportService importService;
	
	@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getImportLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getImportLCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return importService.getImportLCLCustomerServiceInfo(userDetails);

    }

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getImportFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getImportFCLCustomerServiceInfo(@RequestBody UserDetails userDetails)
    {
        return importService.getImportFCLCustomerServiceInfo(userDetails);

    }
    

    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getImportLCLDetails")
    public List<ExportDetailsPOJO> getImportLCLDetails(@RequestBody ExportLCLDetailsAction action)
    {
        return importService.getAllImportlclDetailsByAction(action);

    }
    
//    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//    @GetMapping("/getImportLCLDetails")
//    public List<ExportDetailsPOJO> getExportLCLDetails(@RequestParam(value="action") String action)
//    {
//        return exportService.getExportLCLDetails(action);
//
//    }
    

  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportLCLDetailsWithinsla")
  public List<ExportDetailsPOJO> getImportLCLDetailsWithinsla(@RequestBody ExportWithinsla sla)
  {
      return importService.getImportLCLDetailsWihtinsla(sla);

  }
  

  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportLCLDetailsOutofsla")
  public List<ExportDetailsPOJO> getImportLCLDetailsOutofsla(@RequestBody ExportOutofSla sla)
  {
      return importService.getImportLCLDetailsOutofsla(sla);

  }
  
  //  Documentation
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportDocumentationCustomerServiceInfo")
  public List<CustomerServicePOJO> getImportDocumentationCustomerServiceInfo(@RequestBody UserDetails userDetails)
  {
      return importService.getImportDocumentationServiceInfo(userDetails);

  }
  

  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportDocumentationDetails")
  public List<ExportDetailsPOJO> getImportDocumentationDetails(@RequestBody ExportLCLDetailsAction action)
  {
      return importService.getAllImportDocumentationDetailsByAction(action);

  }
  
//  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//  @GetMapping("/getImportLCLDetails")
//  public List<ExportDetailsPOJO> getExportLCLDetails(@RequestParam(value="action") String action)
//  {
//      return exportService.getExportLCLDetails(action);
//
//  }
  

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getImportDocumentationDetailsWithinsla")
public List<ExportDetailsPOJO> getImportDocumentationDetailsWithinsla(@RequestBody ExportWithinsla sla)
{
    return importService.getImportDocumentationDetailsWithinsla(sla);

}


@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getImportDocumentationDetailsOutofsla")
public List<ExportDetailsPOJO> getImportDocumentationDetailsOutofsla(@RequestBody ExportOutofSla sla)
{
    return importService.getImportDocumentationDetailsOutofsla(sla);

}

}
