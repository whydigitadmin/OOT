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
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
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
    @PostMapping("/getImportSalesSupportSeaInfo")
    public List<SalesSupportPOJO> getImportSalesSupportSeaInfo(@RequestBody UserDetails userDetails)
    {
        return importService.getImportSalesSupportSeaInfo(userDetails);

    }
    
    @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
    @PostMapping("/getImportSalesSupportSeaDetailsInfo")
    public List<SalesSupportDetailsPOJO> getImportSalesSupportSeaDetailsInfo(@RequestBody ExportLCLDetailsAction action)
    {
        return importService.getImportSalesSupportSeaDetailsInfo(action);

    }
	
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
  
//Sea Import Transhipment
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentServiceSeaInfo")
  public List<CustomerServicePOJO> getImportTranshipmentSeaServiceInfo(@RequestBody UserDetails userDetails)
  {
    return importService.getImportTranshipmentServiceSeaInfo(userDetails);

  }


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentSeaDetails")
  public List<ExportDetailsPOJO> getImportTranshipmentSeaDetails(@RequestBody ExportLCLDetailsAction action)
  {
    return importService.getAllImportTranshipmentSeaDetailsByAction(action);

  }

//@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//@GetMapping("/getImportLCLDetails")
//public List<ExportDetailsPOJO> getExportLCLDetails(@RequestParam(value="action") String action)
//{
//    return exportService.getExportLCLDetails(action);
//
//}


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentSeaDetailsWithinsla")
  public List<ExportDetailsPOJO> getImportTranshipmentSeaDetailsWithinsla(@RequestBody ExportWithinsla sla)
  {
	  return importService.getImportTranshipmentSeaDetailsWithinsla(sla);

  }


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentSeaDetailsOutofsla")
  public List<ExportDetailsPOJO> getImportTranshipmentSeaDetailsOutofsla(@RequestBody ExportOutofSla sla)	
  {
	  return importService.getImportTranshipmentSeaDetailsOutofsla(sla);

  }
  
  // Air Import
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportSalesSupportAirInfo")
  public List<SalesSupportPOJO> getImportSalesSupportAirInfo(@RequestBody UserDetails userDetails)
  {
      return importService.getImportSalesSupportAirInfo(userDetails);

  }
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportSalesSupportDetailsAirInfo")
  public List<SalesSupportDetailsPOJO> getImportSalesSupportDetailsAirInfo(@RequestBody ExportLCLDetailsAction action)
  {
      return importService.getImportSalesSupportDetailsAirInfo(action);

  }
  
//Air Import Transhipment
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentServiceAirInfo")
  public List<CustomerServicePOJO> getImportTranshipmentServiceAirInfo(@RequestBody UserDetails userDetails)
  {
    return importService.getImportTranshipmentServiceAirInfo(userDetails);

  }


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentAirDetails")
  public List<ExportDetailsPOJO> getImportTranshipmentAirDetails(@RequestBody ExportLCLDetailsAction action)
  {
    return importService.getAllImportTranshipmentAirDetailsByAction(action);

  }

//@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
//@GetMapping("/getImportLCLDetails")
//public List<ExportDetailsPOJO> getExportLCLDetails(@RequestParam(value="action") String action)
//{
//    return exportService.getExportLCLDetails(action);
//
//}


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentAirDetailsWithinsla")
  public List<ExportDetailsPOJO> getImportTranshipmentAirDetailsWithinsla(@RequestBody ExportWithinsla sla)
  {
	  return importService.getImportTranshipmentAirDetailsWithinsla(sla);

  }


  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getImportTranshipmentAirDetailsOutofsla")
  public List<ExportDetailsPOJO> getImportTranshipmentAirDetailsOutofsla(@RequestBody ExportOutofSla sla)	
  {
	  return importService.getImportTranshipmentAirDetailsOutofsla(sla);

  }

}
