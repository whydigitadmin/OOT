package com.wds.ship.service;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
//import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;

import java.util.List;

public interface ExportService {

	//Sea 
	public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(UserDetails userDetails);
	
	public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action);
	
    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo();

    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails);

    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getAllLCLDetails(ExportLCLDetailsAction action);

//    public List<ExportDetailsPOJO>getAllLCLDetails(String action);
    
//    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(String action,int withinsla);

	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(String action,int outofsla);

	//public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla);
    
    
    //Air Export
    public List<SalesSupportPOJO> getExportSalesSupportAirInfo(UserDetails userDetails);
	
	public List<SalesSupportDetailsPOJO> getExportSalesSupportAirDetailsInfo(ExportLCLDetailsAction action);
    
	
	// Air Export Customer Service 
    public List<CustomerServicePOJO> getExportCustomerServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getExportCustomerServiceDetailsAirInfor(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getExportCustomerServiceDetailsAirWithinsla(String action, int withinsla);

    public List<ExportDetailsPOJO>getExportCustomerServiceDetailsAirOutofsla(String action,int outofsla);


}
