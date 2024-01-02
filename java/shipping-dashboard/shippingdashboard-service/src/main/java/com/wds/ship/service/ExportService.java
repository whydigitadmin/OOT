package com.wds.ship.service;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
//import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;

import java.util.List;

public interface ExportService {

    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo();

    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails);

    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails);
    
    public List<ExportDetailsPOJO>getAllLCLDetails(ExportLCLDetailsAction action);

//    public List<ExportDetailsPOJO>getAllLCLDetails(String action);
    
//    public List<ExportDetailsPOJO>getExportLCLDetailsWithinSla(String action,int withinsla);

	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla);

    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSla(String action,int outofsla);

	//public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla);


}
