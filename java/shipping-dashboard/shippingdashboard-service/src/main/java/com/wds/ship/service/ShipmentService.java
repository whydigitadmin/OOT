package com.wds.ship.service;

import com.wds.ship.shared.shipments.Shipment;

import java.util.List;

public interface ShipmentService {

    public List<Shipment> findShipments(Shipment shipment);

    public Long getShipmentsCount(Shipment shipment);

    public Long getEnquiryCount(Shipment shipment);

}
