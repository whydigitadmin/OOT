package com.wds.ship.service.export;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ExportService {

    @Autowired
    DashboardRoute dashboardRoute;
    
    public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportSalesSupportSea", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportSalesSupportSeaDetails", action, List.class);
        return responseEntity.getBody();
    }

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
    
    public List<ExportDetailsPOJO> getExportLCLDetails(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetails", action, List.class);
        return responseEntity.getBody();
    }

//	public List<ExportDetailsPOJO> getExportLCLDetails(String action) {
//		RestTemplate restTemplate = new RestTemplate();
//        ResponseEntity<List> responseEntity =
//                restTemplate.getForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetails?action="+action, List.class);
//        return responseEntity.getBody();
//	}
    
    public List<ExportDetailsPOJO> getExportLCLDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetailswihtinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getExportLCLDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetailsoutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
    
    // Air Export Service
    
    public List<CustomerServicePOJO> getAirExportCustomerService(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getCustomerServiceAir", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    
}
