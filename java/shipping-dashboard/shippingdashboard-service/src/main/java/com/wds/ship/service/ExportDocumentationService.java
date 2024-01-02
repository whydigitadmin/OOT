package com.wds.ship.service;

import java.util.List;

import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.UserDetails;

public interface ExportDocumentationService {
	
	public List<ExportDocumentation>getExportDocumentation();
	
	public List<CustomerServicePOJO>getExportDocumentationServiceInfo(UserDetails userDetails);

	public List<ExportDetailsPOJO> getExportDocumentationDetailsOutofsla(String action, int outofsla);
	


}
