package com.wds.ship.service;

import java.util.List;

import com.wds.ship.entity.ExportPlanner;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;



public interface ExportPlannerService {
	
	public List<ExportPlanner> getExportPlanner();
	
	public List<CustomerServicePOJO> getExportPlannerInfo(UserDetails userDetails);


}
