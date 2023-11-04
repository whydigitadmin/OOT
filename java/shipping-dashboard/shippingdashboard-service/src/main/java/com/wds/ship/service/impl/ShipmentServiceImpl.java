package com.wds.ship.service.impl;

import com.wds.ship.repository.EnquiryRepository;
import com.wds.ship.repository.ShipmentRepository;
import com.wds.ship.service.ShipmentService;
import com.wds.ship.shared.shipments.Shipment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public  class ShipmentServiceImpl implements ShipmentService {

    @Autowired
    ShipmentRepository shipmentRepository;

    @Autowired
    EnquiryRepository enquiryRepository;
    /**
     * @param shipment
     * @return
     */
    @Override
    public List<Shipment> findShipments(Shipment shipment) {
        List<com.wds.ship.entity.Shipment> entityList = shipmentRepository.findShipments(shipment.getCompanyId() , shipment.getDeptId() , shipment.getMode());
        return entityList.stream().map(x -> constructShipment(x)).collect(Collectors.toList());
    }

    @Override
    public Long getShipmentsCount(Shipment shipment) {
        return shipmentRepository.countShipments(shipment.getCompanyId() , shipment.getDeptId() , shipment.getMode());
    }

    @Override
    public Long getEnquiryCount(Shipment shipment)
    {
        return enquiryRepository.countEnquiry(shipment.getCompanyId() , shipment.getDeptId());
    }

    Shipment constructShipment(com.wds.ship.entity.Shipment entity){
        Shipment model = new Shipment();
        model.setId(entity.getId());
        model.setCompanyId(entity.getCompanyId());
        model.setStatus(entity.getStatus());
        model.setDeptId(entity.getDepartment());
        model.setCargoStatus(entity.getCargoStatus());
        model.setMode(entity.getMode());
        return model;
    }
}
