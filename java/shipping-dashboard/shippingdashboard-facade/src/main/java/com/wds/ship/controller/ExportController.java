package com.wds.ship.controller;



import com.wds.ship.service.export.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;
//import com.wds.ship.shared.user.ExportLCLDetailsAction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/facade/export")
public class ExportController {

    @Autowired
    ExportService exportService;
    
    
    @PostMapping("/getExportSalesSupportSeaInfo")
    public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(@RequestBody UserDetails userDetails)
    {
        return exportService.getExportSalesSupportSeaInfo(userDetails);

    }
    
    @PostMapping("/getExportSalesSupportSeaDetailsInfo")
    public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(@RequestBody ExportLCLDetailsAction action)
    {
        return exportService.getExportSalesSupportSeaDetailsInfo(action);

    }

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
  
  // Sea Export BL Release Desk
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportBLReleaseDeskSeaInfo")
  public List<CustomerServicePOJO> getExportBLReleaseDeskSeaInfo(@RequestBody UserDetails userDetails)
  {
      return exportService.getExportBLReleaseDeskSeaInfo(userDetails);

  }
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportBLReleaseDeskSeaDetails")
  public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetails(@RequestBody ExportLCLDetailsAction action)
  {
      return exportService.getExportBLReleaseDeskSeaDetails(action);

  }
    

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskSeaDetailsWithinsla")
public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetailsWithinsla(@RequestBody ExportWithinsla sla)
{
    return exportService.getExportBLReleaseDeskSeaDetailsWithinsla(sla);

}


@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskSeaDetailsOutofsla")
public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetailsOutofsla(@RequestBody ExportOutofSla sla)
{
    return exportService.getExportBLReleaseDeskSeaDetailsOutofsla(sla);

}
  
  
  // Air Export Service
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportSalesSupportAirInfo")
  public List<SalesSupportPOJO> getExportSalesSupportAirInfo(@RequestBody UserDetails userDetails)
  {
      return exportService.getExportSalesSupportAirInfo(userDetails);

  }
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getExportSalesSupportAirDetailsInfo")
  public List<SalesSupportDetailsPOJO> getExportSalesSupportAirDetailsInfo(@RequestBody ExportLCLDetailsAction action)
  {
      return exportService.getExportSalesSupportAirDetailsInfo(action);

  }
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getAirExportCustomerServiceInfo")
  public List<CustomerServicePOJO> getAirExportCustomerServiceInfo(@RequestBody UserDetails userDetails)
  {
      return exportService.getAirExportCustomerService(userDetails);

  }
  
  @CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
  @PostMapping("/getAirExportCustomerServiceDetails")
  public List<ExportDetailsPOJO> getAirExportCustomerServiceDetails(@RequestBody ExportLCLDetailsAction action)
  {
      return exportService.getAirExportCustomerServiceDetails(action);

  }
    

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getAirExportCustomerServiceDetailsWithinsla")
public List<ExportDetailsPOJO> getAirExportCustomerServiceDetailsWithinsla(@RequestBody ExportWithinsla sla)
{
    return exportService.getAirExportCustomerServiceDetailsWithinsla(sla);

}


@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getAirExportCustomerServiceDetailsOutofsla")
public List<ExportDetailsPOJO> getAirExportCustomerServiceDetailsOutofsla(@RequestBody ExportOutofSla sla)
{
    return exportService.getAirExportCustomerServiceDetailsOutofsla(sla);

}
  
//Air Export BL Release Desk

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskAirInfo")
public List<CustomerServicePOJO> getExportBLReleaseDeskAirInfo(@RequestBody UserDetails userDetails)
{
   return exportService.getExportBLReleaseDeskAirInfo(userDetails);

}

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskAirDetails")
public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetails(@RequestBody ExportLCLDetailsAction action)
{
   return exportService.getExportBLReleaseDeskAirDetails(action);

}
 

@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskAirDetailsWithinsla")
public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetailsWithinsla(@RequestBody ExportWithinsla sla)
{
 return exportService.getExportBLReleaseDeskAirDetailsWithinsla(sla);

}


@CrossOrigin(origins = {"https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200"})
@PostMapping("/getExportBLReleaseDeskAirDetailsOutofsla")
public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetailsOutofsla(@RequestBody ExportOutofSla sla)
{
 return exportService.getExportBLReleaseDeskAirDetailsOutofsla(sla);

}



}
