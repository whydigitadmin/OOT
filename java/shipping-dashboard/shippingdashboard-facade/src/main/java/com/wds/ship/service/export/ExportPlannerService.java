package com.wds.ship.service.export;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
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
}
