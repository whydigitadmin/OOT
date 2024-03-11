package com.wds.ship.controller;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/v1/export")
public class ExportServiceController {

    @Autowired
    ExportService exportService;
    

    @PostMapping("/getExportSalesSupportSea")
    public List<SalesSupportPOJO> getExportSalesSupportSea(@RequestBody UserDetails userDetails) {
        return exportService.getExportSalesSupportSeaInfo(userDetails);
    }
    
    @PostMapping("/getExportSalesSupportSeaDetails")
    public List<SalesSupportDetailsPOJO>getExportSalesSupportSeaDetails(@RequestBody ExportLCLDetailsAction action){
    	return exportService.getExportSalesSupportSeaDetailsInfo(action);
    }
    
    @GetMapping("/getCustomerServiceLCL1")
    public List<ExportCustomerServiceLCL> findByUserId(@RequestParam(name = "userId") Long userId) {
        return exportService.getCustomerServiceLCLInfo();
    }

    @PostMapping("/getCustomerServiceLCL")
    public List<CustomerServicePOJO> getInfo(@RequestBody UserDetails userDetails) {
        return exportService.getLCLCustomerServiceInfo(userDetails);
    }

    @PostMapping("/getLCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportService.getLCLCustomerServiceInfo(userDetails);
    }

    @PostMapping("/getFCLCustomerServiceInfo")
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
        return exportService.getFCLCustomerServiceInfo(userDetails);
    }
    
//    @GetMapping("/exportlcldetails")
//  public List<ExportDetailsPOJO>getAllLCL(@RequestParam(value="action")String action){
//  	return exportCustomerServiceLCLService.getAllLCLDetails(action);
//  }
    
    @PostMapping("/exportlcldetails")
    public List<ExportDetailsPOJO>getAllLCL(@RequestBody ExportLCLDetailsAction action){
    	return exportService.getAllLCLDetails(action);
    }
     
    
//    @GetMapping("/exportlcldetailswihtinsla")
//    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestParam(value="action")String action,@RequestParam(value="withinsla")int withinsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsWithinSla(action, withinsla);
//    }
    
      @PostMapping("/exportlcldetailswihtinsla")
      public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestBody ExportWithinsla sla){
    	  return exportService.getExportLCLDetailsWithinSla(sla.getAction(),sla.getWithinsla());
      }
    
//    @GetMapping("/exportlcldetailsoutofsla")
//    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(@RequestParam(value="action")String action,@RequestParam(value="outofsla")int outofsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsOutofSla(action, outofsla);
//    }
    
    @PostMapping("/exportlcldetailsoutofsla")
    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestBody ExportOutofSla sla){
  	  return exportService.getExportLCLDetailsOutofSla(sla.getAction(),sla.getOutofsla());
    }

    @PostMapping("/exportfcldetails")
    public List<ExportDetailsPOJO>getAllFCL(@RequestBody ExportLCLDetailsAction action){
        return exportService.getAllFCLDetails(action);
    }


//    @GetMapping("/exportfcldetailswihtinsla")
//    public List<ExportDetailsPOJO>getExportFCLDetailsWithinSla(@RequestParam(value="action")String action,@RequestParam(value="withinsla")int withinsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsWithinSla(action, withinsla);
//    }

    @PostMapping("/exportfcldetailswihtinsla")
    public List<ExportDetailsPOJO>getExportFCLDetailsWithinSla(@RequestBody ExportWithinsla sla){
        return exportService.getExportFCLDetailsWithinSla(sla.getAction(),sla.getWithinsla());
    }

//    @GetMapping("/exportlcldetailsoutofsla")
//    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(@RequestParam(value="action")String action,@RequestParam(value="outofsla")int outofsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsOutofSla(action, outofsla);
//    }

    @PostMapping("/exportfcldetailsoutofsla")
    public List<ExportDetailsPOJO>getExportFCLDetailsWithinSla(@RequestBody ExportOutofSla sla){
        return exportService.getExportFCLDetailsOutofSla(sla.getAction(),sla.getOutofsla());
    }
    
    // Sea Export BL Release Desk
    
    @PostMapping("/getExportBLReleaseDeskSea")
    public List<CustomerServicePOJO> getExportBLReleaseDeskSeaInfo(@RequestBody UserDetails userDetails) {
        return exportService.getExportBLReleaseSeaServiceInfo(userDetails);
    }
    
    @PostMapping("/getExportBLReleaseDeskSeaDetails")
    public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetailsAirInfo(@RequestBody ExportLCLDetailsAction action) {
        return exportService.getExportBLReleaseSeaDetails(action);
    }
    
    @PostMapping("/getExportBLReleaseDeskSeaDetailsWihtinsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskSeaDetailsWithinSla(@RequestBody ExportWithinsla sla){
  	  return exportService.getExportBLReleaseSeaDetailsWithinSla(sla.getAction(),sla.getWithinsla());
    }
    
    @PostMapping("/getExportBLReleaseDeskSeaDetailsOutofsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskSeaDetailsOutofSla(@RequestBody ExportOutofSla sla){
  	  return exportService.getExportBLReleaseSeaDetailsOutofSla(sla.getAction(),sla.getOutofsla());
    }
    
    
 // Air Export Service 
    
    @PostMapping("/getExportSalesSupportAir")
    public List<SalesSupportPOJO> getExportSalesSupportAir(@RequestBody UserDetails userDetails) {
        return exportService.getExportSalesSupportAirInfo(userDetails);
    }
    
    @PostMapping("/getExportSalesSupportAirDetails")
    public List<SalesSupportDetailsPOJO>getExportSalesSupportAirDetails(@RequestBody ExportLCLDetailsAction action){
    	return exportService.getExportSalesSupportAirDetailsInfo(action);
    }
    
    @PostMapping("/getExportCustomerServiceAir")
    public List<CustomerServicePOJO> getExportServiceAirInfo(@RequestBody UserDetails userDetails) {
        return exportService.getExportCustomerServiceAirInfo(userDetails);
    }
    
    @PostMapping("/getExportCustomerServiceDetailsAir")
    public List<ExportDetailsPOJO> getExportServiceDetailsAirInfo(@RequestBody ExportLCLDetailsAction action) {
        return exportService.getExportCustomerServiceDetailsAirInfor(action);
    }
    
    @PostMapping("/getExportCustomerServiceDetailsAirWihtinsla")
    public List<ExportDetailsPOJO>getExportCustDetailsWithinSla(@RequestBody ExportWithinsla sla){
  	  return exportService.getExportLCLDetailsWithinSla(sla.getAction(),sla.getWithinsla());
    }
    
    @PostMapping("/getExportCustomerServiceDetailsAirOutofsla")
    public List<ExportDetailsPOJO>getExportCustDetailsOutofSla(@RequestBody ExportOutofSla sla){
  	  return exportService.getExportLCLDetailsOutofSla(sla.getAction(),sla.getOutofsla());
    }
    
    // Air Export BL Release Desk
    
    @PostMapping("/getExportBLReleaseDeskAir")
    public List<CustomerServicePOJO> getExportBLReleaseDeskAirInfo(@RequestBody UserDetails userDetails) {
        return exportService.getExportBLReleaseAirServiceInfo(userDetails);
    }
    
    @PostMapping("/getExportBLReleaseDeskAirDetails")
    public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetailsAirInfo(@RequestBody ExportLCLDetailsAction action) {
        return exportService.getExportBLReleaseAirDetails(action);
    }
    
    @PostMapping("/getExportBLReleaseDeskAirDetailsWihtinsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskAirDetailsWithinSla(@RequestBody ExportWithinsla sla){
  	  return exportService.getExportBLReleaseAirDetailsWithinSla(sla.getAction(),sla.getWithinsla());
    }
    
    @PostMapping("/getExportBLReleaseDeskAirDetailsOutofsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskAirDetailsOutofSla(@RequestBody ExportOutofSla sla){
  	  return exportService.getExportBLReleaseAirDetailsOutofSla(sla.getAction(),sla.getOutofsla());
    }
    
}
