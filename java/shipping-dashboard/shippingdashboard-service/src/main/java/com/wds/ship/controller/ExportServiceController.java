package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;

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
    public List<ExportDetailsPOJO>getAllLCL(@RequestBody DetailsAction action){
    	return exportService.getAllLCLDetails(action);
    }

      @PostMapping("/exportlcldetailswihtinsla")
      public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(@RequestBody DetailsAction sla){
    	  return exportService.getExportLCLDetailsWithinSla(sla);
      }

    @PostMapping("/exportlcldetailsoutofsla")
    public List<ExportDetailsPOJO>getExportLCLDetailsOutOfSla(@RequestBody DetailsAction sla){
  	  return exportService.getExportLCLDetailsOutofSla(sla);
    }

    @PostMapping("/exportfcldetails")
    public List<ExportDetailsPOJO>getAllFCL(@RequestBody DetailsAction action){
        return exportService.getAllFCLDetails(action);
    }


//    @GetMapping("/exportfcldetailswihtinsla")
//    public List<ExportDetailsPOJO>getExportFCLDetailsWithinSla(@RequestParam(value="action")String action,@RequestParam(value="withinsla")int withinsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsWithinSla(action, withinsla);
//    }

    @PostMapping("/exportfcldetailswihtinsla")
    public List<ExportDetailsPOJO>getExportFCLDetailsWithinSla(@RequestBody DetailsAction sla){
        return exportService.getExportFCLDetailsWithinSla(sla);
    }

//    @GetMapping("/exportlcldetailsoutofsla")
//    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(@RequestParam(value="action")String action,@RequestParam(value="outofsla")int outofsla){
//    	return exportCustomerServiceLCLService.getExportLCLDetailsOutofSla(action, outofsla);
//    }

    @PostMapping("/exportfcldetailsoutofsla")
    public List<ExportDetailsPOJO>getExportFCLDetailsWithoutSla(@RequestBody DetailsAction sla){
        return exportService.getExportFCLDetailsOutofSla(sla);
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
    public List<ExportDetailsPOJO>getExportBLReleaseDeskSeaDetailsWithinSla(@RequestBody DetailsAction sla){
  	  return exportService.getExportBLReleaseSeaDetailsWithinSla(sla);
    }
    
    @PostMapping("/getExportBLReleaseDeskSeaDetailsOutofsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskSeaDetailsOutofSla(@RequestBody DetailsAction sla){
  	  return exportService.getExportBLReleaseSeaDetailsOutofSla(sla);
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
    
//    @PostMapping("/getExportCustomerServiceDetailsAirWihtinsla")
//    public List<ExportDetailsPOJO>getExportCustDetailsWithinSla(@RequestBody DetailsAction sla){
//  	  return exportService.getExportLCLDetailsWithinSla(sla);
//    }
//    
//    @PostMapping("/getExportCustomerServiceDetailsAirOutofsla")
//    public List<ExportDetailsPOJO>getExportCustDetailsOutofSla(@RequestBody DetailsAction sla){
//  	  return exportService.getExportLCLDetailsOutofSla(sla);
//    }
    
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
    public List<ExportDetailsPOJO>getExportBLReleaseDeskAirDetailsWithinSla(@RequestBody DetailsAction sla){
  	  return exportService.getExportBLReleaseAirDetailsWithinSla(sla);
    }
    
    @PostMapping("/getExportBLReleaseDeskAirDetailsOutofsla")
    public List<ExportDetailsPOJO>getExportBLReleaseDeskAirDetailsOutofSla(@RequestBody DetailsAction sla){
  	  return exportService.getExportBLReleaseAirDetailsOutofSla(sla);
    }
    
}
