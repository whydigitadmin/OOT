package com.wds.ship.service.export;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCLDetails;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ExportService {

    @Autowired
    DashboardRoute dashboardRoute;

    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getLCLCustomerServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }

    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getFCLCustomerServiceInfo", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportLCLDetails(String action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetails", action, List.class);
        return responseEntity.getBody();
    }
    
    
}
