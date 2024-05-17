package com.wds.ship.service;

import java.util.List;

import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.UserDetails;

public interface ExportDocumentationService {
	
	public List<ExportDocumentation>getExportDocumentation();
	
	public List<CustomerServicePOJO>getExportDocumentationServiceInfo(UserDetails userDetails);
	
	public List<ExportDetailsPOJO> getExportDocumentationDetailsCount(ExportLCL action);
	
	public List<ExportDetailsPOJO> getExportDocumentationDetailsWithinsla(DetailsAction sla);
	
	public List<ExportDetailsPOJO> getExportDocumentationDetailsOutofsla(DetailsAction  sla);
	
	
// Air Export Documentation
	public List<CustomerServicePOJO> getExportDocumentationServiceAirInfo(UserDetails userDetails);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsCount(ExportLCL action);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsWithinsla(DetailsAction sla);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsOutofsla(DetailsAction sla);

	
	


}
