package com.wds.ship.controller;

import com.wds.ship.service.ShipmentService;
import com.wds.ship.shared.shipments.Shipment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/shipment")
public class ShipmentServiceController {

    @Autowired
    ShipmentService shipmentservice;

    @PostMapping("/findShipments")
    public List<Shipment> findShipments(@RequestBody Shipment shipment)
    {
        return shipmentservice.findShipments(shipment);
    }

    @PostMapping("/getShipmentCount")
    public Long getShipmentsCount(@RequestBody Shipment shipment)
    {
        return shipmentservice.getShipmentsCount(shipment);
    }

    @PostMapping("/getEnquiryCount")
    public Long getEnquiryCount(@RequestBody Shipment shipment)
    {
        return shipmentservice.getEnquiryCount(shipment);
    }
}
