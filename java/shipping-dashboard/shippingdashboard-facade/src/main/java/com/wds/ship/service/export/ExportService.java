package com.wds.ship.service.export;

import com.wds.ship.router.DashboardRoute;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.*;
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
    
    public List<ExportDetailsPOJO> getExportLCLDetails(DetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportlcldetails", action, List.class);
        return responseEntity.getBody();
    }

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


    public List<ExportDetailsPOJO> getExportFCLDetails(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportfcldetails", action, List.class);
        return responseEntity.getBody();
    }

    public List<ExportDetailsPOJO> getExportFCLDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportfcldetailswihtinsla",sla, List.class);
        return responseEntity.getBody();
    }


    public List<ExportDetailsPOJO> getExportFCLDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/exportfcldetailsoutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
    
    // Sea Export BL Release Desk
    
    public List<CustomerServicePOJO> getExportBLReleaseDeskSeaInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskSea", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetails(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskSeaDetails", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskSeaDetailsWihtinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskSeaDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskSeaDetailsOutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
    // Air Export Service
    
    public List<SalesSupportPOJO> getExportSalesSupportAirInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportSalesSupportAir", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<SalesSupportDetailsPOJO> getExportSalesSupportAirDetailsInfo(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportSalesSupportAirDetails", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<CustomerServicePOJO> getAirExportCustomerService(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportCustomerServiceAir", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getAirExportCustomerServiceDetails(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportCustomerServiceDetailsAir", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getAirExportCustomerServiceDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportCustomerServiceDetailsAirWihtinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getAirExportCustomerServiceDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportCustomerServiceDetailsAirOutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
    
// Air Export BL Release Desk
    
    public List<CustomerServicePOJO> getExportBLReleaseDeskAirInfo(UserDetails userDetails){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskAir", userDetails, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetails(ExportLCLDetailsAction action){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskAirDetails", action, List.class);
        return responseEntity.getBody();
    }
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetailsWithinsla(ExportWithinsla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskAirDetailsWihtinsla",sla, List.class);
        return responseEntity.getBody();
    }
    
    
    public List<ExportDetailsPOJO> getExportBLReleaseDeskAirDetailsOutofsla(ExportOutofSla sla){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(dashboardRoute.dashboardServiceUrl + "/api/v1/export/getExportBLReleaseDeskAirDetailsOutofsla",sla ,List.class);
        return responseEntity.getBody();
    }
}
