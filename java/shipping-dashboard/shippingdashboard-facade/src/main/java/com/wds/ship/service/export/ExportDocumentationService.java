package com.wds.ship.service.export;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportDocumentationService {
	
	@Autowired
    DashboardRoute dashboardRoute;

    public List<CustomerServicePOJO> getExportDocumentationServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationServiceCount(ExportLCL action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentServiceCount", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationServiceWithinsla(ExportWithinsla withinsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentServiceWithinsla", withinsla, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationServiceOutofsla(ExportOutofSla outofsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentServiceOutofsla", outofsla, List.class);
        return responseEntity.getBody();
    }
    
    // Air Export Documentation
    
    public List<CustomerServicePOJO> getExportDocumentationServiceAirInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentServiceAirInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationAirCount(ExportLCL action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentationAirCount", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationAirWithinsla(ExportWithinsla withinsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentationAirWithinsla", withinsla, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportDocumentationAirOutofsla(ExportOutofSla outofsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportDocumentationAirOutofsla", outofsla, List.class);
        return responseEntity.getBody();
    }
    
    

}
