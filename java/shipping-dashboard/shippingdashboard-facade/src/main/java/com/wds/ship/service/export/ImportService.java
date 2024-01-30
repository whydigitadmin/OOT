package com.wds.ship.service.export;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ImportService {
	
	@Autowired
    DashboardRoute dashboardRoute;
	
	public List<SalesSupportPOJO> getImportSalesSupportSeaInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportSalesSupportSea", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<SalesSupportDetailsPOJO> getImportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportSalesSupportSeaDetails", action, List.class);
        return responseEntity.getBody();
    }
	
	public List<CustomerServicePOJO> getImportLCLCustomerServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportLCLCustomerServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }

    public List<CustomerServicePOJO> getImportFCLCustomerServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportFCLCustomerServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getAllImportlclDetailsByAction(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportLCLDetails", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getImportLCLDetailsWihtinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportLCLDetailsWihtinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getImportLCLDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportLCLDetailsOutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
    
    // Documentation
    
    public List<CustomerServicePOJO> getImportDocumentationServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportDocumentationServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getAllImportDocumentationDetailsByAction(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportDocumentationDetails", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getImportDocumentationDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportDocumentServiceWithinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getImportDocumentationDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/import/getImportDocumentServiceOutofsla",sla ,List.class);
        return responseEntity.getBody();
    }

    
    
}
