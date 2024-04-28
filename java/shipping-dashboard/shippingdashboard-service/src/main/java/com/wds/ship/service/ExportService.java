package com.wds.ship.service;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.*;
//import com.wds.ship.shared.user.ExportLCLDetailsAction;

import java.util.List;

public interface ExportService {

	//Sea 
	public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(UserDetails userDetails);
	
	public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action);
	
    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo();

    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails);

    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getAllLCLDetails(ExportLCLDetailsAction action);

	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(ExportWithinsla sla);

    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(ExportOutofSla sla);

    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSlaV1(ExportOutofSla sla);

    public List<ExportDetailsPOJO>getAllFCLDetails(ExportLCLDetailsAction action);

    public List<ExportDetailsPOJO> getExportFCLDetailsWithinSla(ExportWithinsla sla);

    public List<ExportDetailsPOJO>getExportFCLDetailsOutofSla(ExportOutofSla sla);

	//public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla);
    
    
    // Sea Export BL Release Desk
    
    public List<CustomerServicePOJO> getExportBLReleaseSeaServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getExportBLReleaseSeaDetails(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getExportBLReleaseSeaDetailsWithinSla(ExportWithinsla sla);

    public List<ExportDetailsPOJO>getExportBLReleaseSeaDetailsOutofSla(ExportOutofSla sla);
    
    
    //Air Export
    public List<SalesSupportPOJO> getExportSalesSupportAirInfo(UserDetails userDetails);
	
	public List<SalesSupportDetailsPOJO> getExportSalesSupportAirDetailsInfo(ExportLCLDetailsAction action);
    
	
	// Air Export Customer Service 
    public List<CustomerServicePOJO> getExportCustomerServiceAirInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getExportCustomerServiceDetailsAirInfor(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getExportCustomerServiceDetailsAirWithinsla(String action, int withinsla);

    public List<ExportDetailsPOJO>getExportCustomerServiceDetailsAirOutofsla(String action,int outofsla);

    
    // Air Export BL Release Desk
    
    public List<CustomerServicePOJO> getExportBLReleaseAirServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getExportBLReleaseAirDetails(ExportLCLDetailsAction action);
    
    public List<ExportDetailsPOJO> getExportBLReleaseAirDetailsWithinSla(ExportWithinsla sla);

    public List<ExportDetailsPOJO>getExportBLReleaseAirDetailsOutofSla(ExportOutofSla sla);
}
