package com.wds.ship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wds.ship.service.ImportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@RestController
@RequestMapping("/api/v1/import")
public class ImportServiceController {
	
	@Autowired
    ImportService ImportService;
	
		@PostMapping("/getImportSalesSupportSea")
		public List<SalesSupportPOJO> getImportSalesSupportSea(@RequestBody UserDetails userDetails) {
			return ImportService.getImportSalesSupportSeaInfo(userDetails);
		}
    
		@PostMapping("/getImportSalesSupportSeaDetails")
		public List<SalesSupportDetailsPOJO>getImportSalesSupportSeaDetails(@RequestBody ExportLCLDetailsAction action){
			return ImportService.getImportSalesSupportSeaDetailsInfo(action);
		}
	
	    @PostMapping("/getImportLCLCustomerServiceInfo")
	    public List<CustomerServicePOJO> getImportLCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportLCLCustomerServiceInfo(userDetails);
	    }

	    @PostMapping("/getImportFCLCustomerServiceInfo")
	    public List<CustomerServicePOJO> getImportFCLCustomerServiceInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportFCLCustomerServiceInfo(userDetails);
	    }
	    
	    @PostMapping("/getImportLCLDetails")
	    public List<ExportDetailsPOJO>getAllImportlclDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportLCLDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportLCLDetailsWihtinsla")
	      public List<ExportDetailsPOJO>getImportLCLDetailsWihtinsla(@RequestBody ExportWithinsla sla){
	    	  return ImportService.getImportLCLDetailsWithinSla(sla.getAction(),sla.getWithinsla());
	      }
	    
	    @PostMapping("/getImportLCLDetailsOutofsla")
	    public List<ExportDetailsPOJO>getImportLCLDetailsOutofsla(@RequestBody ExportOutofSla sla){
	  	  return ImportService.getImportLCLDetailsOutofSla(sla.getAction(),sla.getOutofsla());
	    }
	    
	    
	    // Sea Import Documentation
	    
	    @PostMapping("/getImportDocumentationServiceInfo")
	    public List<CustomerServicePOJO> getImportDocumentationServiceInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportDocumentationServiceInfo(userDetails);
	    }
	    
	    @PostMapping("/getImportDocumentationDetails")
	    public List<ExportDetailsPOJO>getAllImportDocumentationDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportDocumentationDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportDocumentServiceWithinsla")
	    public List<ExportDetailsPOJO>getImportDocumentationDetailsWithinsla(@RequestBody ExportWithinsla sla){
	    	return ImportService.getImportDocumentationDetailsWithinSla(sla.getAction(),sla.getWithinsla());
	    }
	    
	    @PostMapping("/getImportDocumentServiceOutofsla")
	    public List<ExportDetailsPOJO>getImportDocumentationDetailsOutofsla(@RequestBody ExportOutofSla sla){
	    	return ImportService.getImportDocumentationDetailsOutofSla(sla.getAction(),sla.getOutofsla());
	    }
	    
	   
	
}
