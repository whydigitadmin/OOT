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
public class ExportPlannerService {
	
	@Autowired
    DashboardRoute dashboardRoute;
	
	public List<CustomerServicePOJO> getExportPlannerInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
	
	public List<ExportDetailsPOJO> getExportPlannerServiceCount(ExportLCL action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerServiceCount", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportPlannerServiceWithinsla(ExportWithinsla withinsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerServiceWithinsla", withinsla, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportPlannerServiceOutofsla(ExportOutofSla outofsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerServiceOutofsla", outofsla, List.class);
        return responseEntity.getBody();
    }
    
    
    
    // Air Export
    
    
    public List<CustomerServicePOJO> getExportPlannerAirInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerServiceAirInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
	
	public List<ExportDetailsPOJO> getExportPlannerAirCount(ExportLCL action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerAirCount", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportPlannerAirWithinsla(ExportWithinsla withinsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerAirWithinsla", withinsla, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportPlannerAirOutofsla(ExportOutofSla outofsla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportPlannerAirOutofsla", outofsla, List.class);
        return responseEntity.getBody();
    }
    
    
}
