package com.wds.ship.controller;

import com.wds.ship.service.ShipmentService;
import com.wds.ship.shared.shipments.Shipment;
import com.wds.ship.shared.shipments.ShipmentResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/facade/shipment")
public class ShipmentController {

    @Autowired
    ShipmentService shipmentService;

    @PostMapping("/findShipments")
    public List<Shipment> findShipments(@RequestBody Shipment shipment)
        {
        return shipmentService.findShipments(shipment);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/getShipmentCount")
    public ShipmentResponse getShipmentsCount(@RequestBody Shipment shipment)
    {
        ShipmentResponse response = new ShipmentResponse();
        Long count = shipmentService.getShipmentsCount(shipment);
        response.setName("count");
        response.setValue(String.valueOf(count));

        return response;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/getEnquiryCount")
    public Long getEnquiryCount(@RequestBody Shipment shipment)
    {
        return shipmentService.getEnquiryCount(shipment);
    }
}
