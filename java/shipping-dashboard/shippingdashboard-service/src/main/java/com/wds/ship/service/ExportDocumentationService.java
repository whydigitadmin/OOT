package com.wds.ship.service;

import java.util.List;

import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.UserDetails;

public interface ExportDocumentationService {
	
	public List<ExportDocumentation>getExportDocumentation();
	
	public List<CustomerServicePOJO>getExportDocumentationServiceInfo(UserDetails userDetails);
	
	public List<ExportDetailsPOJO> getExportDocumentationDetailsCount(ExportLCL action);
	
	public List<ExportDetailsPOJO> getExportDocumentationDetailsWithinsla(String action, int withinsla);

	public List<ExportDetailsPOJO> getExportDocumentationDetailsOutofsla(String action, int outofsla);
	
	
// Air Export Documentation
	public List<CustomerServicePOJO> getExportDocumentationServiceAirInfo(UserDetails userDetails);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsCount(ExportLCL action);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsWithinsla(String action, int withinsla);

	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsOutofsla(String action, int outofsla);
	


}
