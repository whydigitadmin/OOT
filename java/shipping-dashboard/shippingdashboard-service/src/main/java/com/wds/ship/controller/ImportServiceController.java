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
import com.wds.ship.shared.user.DetailsAction;
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
	      public List<ExportDetailsPOJO>getImportLCLDetailsWihtinsla(@RequestBody DetailsAction sla){
	    	  return ImportService.getImportLCLDetailsWithinSla(sla);
	      }
	    
	    @PostMapping("/getImportLCLDetailsOutofsla")
	    public List<ExportDetailsPOJO>getImportLCLDetailsOutofsla(@RequestBody DetailsAction sla){
	  	  return ImportService.getImportLCLDetailsOutofSla(sla);
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
	    public List<ExportDetailsPOJO>getImportDocumentationDetailsWithinsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportDocumentationDetailsWithinSla(sla);
	    }
	    
	    @PostMapping("/getImportDocumentServiceOutofsla")
	    public List<ExportDetailsPOJO>getImportDocumentationDetailsOutofsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportDocumentationDetailsOutofSla(sla);
	    }
	    
	    // Sea Import Transhipment Desk
	    
	    @PostMapping("/getImportTranshipmentServiceSeaInfo")
	    public List<CustomerServicePOJO> getImportTranshipmentServiceSeaInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportTranshipmentServiceSeaInfo(userDetails);
	    }
	    
	    @PostMapping("/getImportTranshipmentSeaDetails")
	    public List<ExportDetailsPOJO>getAllImportTranshipmentSeaDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportTranshipmentSeaDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportTranshipmentSeaServiceWithinsla")
	    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsWithinsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportTranshipmentSeaDetailsWithinSla(sla);
	    }
	    
	    @PostMapping("/getImportTranshipmentSeaServiceOutofsla")
	    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsOutofsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportTranshipmentSeaDetailsOutofSla(sla);
	    }
	    
	    // Air Import
	    
	    @PostMapping("/getImportSalesSupportAir")
		public List<SalesSupportPOJO> getImportSalesSupportAir(@RequestBody UserDetails userDetails) {
			return ImportService.getImportSalesSupportAirInfo(userDetails);
		}
    
		@PostMapping("/getImportSalesSupportAirDetails")
		public List<SalesSupportDetailsPOJO>getImportSalesSupportAirDetails(@RequestBody ExportLCLDetailsAction action){
			return ImportService.getImportSalesSupportDetailsAirInfo(action);
		}
		
		// Air Import Customer Service
		@PostMapping("/getImportCustomerServicetAir")
		public List<CustomerServicePOJO> getImportCustomerServiceAir(@RequestBody UserDetails userDetails) {
			return ImportService.getImportCustomerServiceAirInfo(userDetails);
		}
		
		@PostMapping("/getImportCustomerServiceAirDetails")
	    public List<ExportDetailsPOJO>getAllImportCustomerServiceAirDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportCustomerServiceAirDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportCustomerServiceAirWithinsla")
	    public List<ExportDetailsPOJO>getImportCustomerServiceAirDetailsWithinsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportCustomerServiceAirDetailsWithinSla(sla);
	    }
	    
	    @PostMapping("/getImportCustomerServiceAirOutofsla")
	    public List<ExportDetailsPOJO>getImportCustomerServiceAirDetailsOutofsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportCustomerServiceAirDetailsOutofSla(sla);
	    }
		
		// Air Import Documentation
	    
	    @PostMapping("/getImportDocumentationServiceAirInfo")
	    public List<CustomerServicePOJO> getImportDocumentationServiceAirInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportDocumentationServiceAirInfo(userDetails);
	    }
	    
	    @PostMapping("/getImportDocumentationDetailsAir")
	    public List<ExportDetailsPOJO>getAllImportDocumentationAirDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportDocumentationAirDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportDocumentationAirWithinsla")
	    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsWithinsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportDocumentationAirDetailsWithinSla(sla);
	    }
	    
	    @PostMapping("/getImportDocumentationAirOutofsla")
	    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsOutofsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportDocumentationAirDetailsOutofSla(sla);
	    }
		
		
		// AIr Import Transhipment Desk
	    
		@PostMapping("/getImportTranshipmentServiceAirInfo")
	    public List<CustomerServicePOJO> getImportTranshipmentServiceAirInfo(@RequestBody UserDetails userDetails) {
	        return ImportService.getImportTranshipmentServiceAirInfo(userDetails);
	    }
	    
	    @PostMapping("/getImportTranshipmentAirDetails")
	    public List<ExportDetailsPOJO>getAllImportTranshipmentAirDetailsByAction(@RequestBody ExportLCLDetailsAction action){
	    	return ImportService.getImportTranshipmentAirDetailsByAction(action);
	    }
	    
	    @PostMapping("/getImportTranshipmentAirServiceWithinsla")
	    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsWithinsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportTranshipmentAirDetailsWithinSla(sla);
	    }
	    
	    @PostMapping("/getImportTranshipmentAirServiceOutofsla")
	    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsOutofsla(@RequestBody DetailsAction sla){
	    	return ImportService.getImportTranshipmentAirDetailsOutofSla(sla);
	    }
	    
	    
	   
	
}
