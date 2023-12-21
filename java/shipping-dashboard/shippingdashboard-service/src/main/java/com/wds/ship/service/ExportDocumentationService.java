package com.wds.ship.service;

import java.util.List;

import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

public interface ExportDocumentationService {
	
	public List<ExportDocumentation>getExportDocumentation();
	
	public List<CustomerServicePOJO>getExportDocumentationServiceInfo(UserDetails userDetails);

}
