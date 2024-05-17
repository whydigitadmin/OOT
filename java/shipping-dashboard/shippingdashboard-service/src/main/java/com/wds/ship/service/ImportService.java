package com.wds.ship.service;

import java.util.List;

import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;

public interface ImportService {
	
	
  //Sea Import
	List<SalesSupportDetailsPOJO> getImportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action);

	List<SalesSupportPOJO> getImportSalesSupportSeaInfo(UserDetails userDetails);
	// LCL and FCL
	public List<CustomerServicePOJO> getImportLCLCustomerServiceInfo(UserDetails userDetails);

    public List<CustomerServicePOJO> getImportFCLCustomerServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportLCLDetailsByAction(ExportLCLDetailsAction action);

//    public List<ExportDetailsPOJO>getAllLCLDetails(String action);
    
//    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(String action,int withinsla);

	public List<ExportDetailsPOJO> getImportLCLDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportLCLDetailsOutofSla(DetailsAction sla);
   
// Sea Import Documentation
    
    public List<CustomerServicePOJO> getImportDocumentationServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportDocumentationDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportDocumentationDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportDocumentationDetailsOutofSla(DetailsAction sla);
    
    //Transhipment
    
    public List<CustomerServicePOJO> getImportTranshipmentServiceSeaInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportTranshipmentSeaDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsOutofSla(DetailsAction sla);
    
    
    
    
    
    //Air Import
    
    List<SalesSupportPOJO> getImportSalesSupportAirInfo(UserDetails userDetails);
    
    List<SalesSupportDetailsPOJO> getImportSalesSupportDetailsAirInfo(ExportLCLDetailsAction action);
    
    //Air Import Customer Service
    public List<CustomerServicePOJO> getImportCustomerServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportCustomerServiceAirDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportCustomerServiceAirDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportCustomerServiceAirDetailsOutofSla(DetailsAction sla);
    
    // Air Documentation
    
    public List<CustomerServicePOJO> getImportDocumentationServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportDocumentationAirDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsOutofSla(DetailsAction sla);
    // Air Transhipment

    public List<CustomerServicePOJO> getImportTranshipmentServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportTranshipmentAirDetailsWithinSla(DetailsAction sla);

    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsOutofSla(DetailsAction sla);

	
}
