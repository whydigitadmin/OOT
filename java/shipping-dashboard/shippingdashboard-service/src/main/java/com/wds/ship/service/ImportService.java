package com.wds.ship.service;

import java.util.List;

import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
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

	public List<ExportDetailsPOJO> getImportLCLDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getImportLCLDetailsOutofSla(String action,int outofsla);
   
// Sea Import Documentation
    
    public List<CustomerServicePOJO> getImportDocumentationServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportDocumentationDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportDocumentationDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getImportDocumentationDetailsOutofSla(String action,int outofsla);
    
    //Transhipment
    
    public List<CustomerServicePOJO> getImportTranshipmentServiceSeaInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportTranshipmentSeaDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getImportTranshipmentSeaDetailsOutofSla(String action,int outofsla);
    
    
    
    
    
    //Air Import
    
    List<SalesSupportPOJO> getImportSalesSupportAirInfo(UserDetails userDetails);
    
    List<SalesSupportDetailsPOJO> getImportSalesSupportDetailsAirInfo(ExportLCLDetailsAction action);
    
    //Air Import Customer Service
    public List<CustomerServicePOJO> getImportCustomerServiceAirInfo(UserDetails userDetails);
    
    // Air Documentation
    
    public List<CustomerServicePOJO> getImportDocumentationServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportDocumentationAirDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getImportDocumentationAirDetailsOutofSla(String action,int outofsla);
    // Air Transhipment

    public List<CustomerServicePOJO> getImportTranshipmentServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsByAction(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getImportTranshipmentAirDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getImportTranshipmentAirDetailsOutofSla(String action,int outofsla);

	
}
