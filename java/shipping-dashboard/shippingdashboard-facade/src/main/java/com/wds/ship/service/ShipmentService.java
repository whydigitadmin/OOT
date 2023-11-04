package com.wds.ship.service;

import com.wds.ship.shared.shipments.Shipment;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
public class ShipmentService {

    @Value("${loginservice.url}")
    private String serviceUrl;

    public List<Shipment> findShipments(Shipment shipment)
    {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity =
                restTemplate.postForEntity(serviceUrl + "/api/v1/shipment/findShipments", shipment, List.class);
        return responseEntity.getBody();

    }


    public Long getShipmentsCount(Shipment shipment)
    {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Long> responseEntity =
                restTemplate.postForEntity(serviceUrl + "/api/v1/shipment/getShipmentCount", shipment, Long.class);
        return responseEntity.getBody();

    }

    public Long getEnquiryCount(Shipment shipment)
    {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Long> responseEntity =
                restTemplate.postForEntity(serviceUrl + "/api/v1/shipment/getEnquiryCount", shipment, Long.class);
        return responseEntity.getBody();

    }


}
