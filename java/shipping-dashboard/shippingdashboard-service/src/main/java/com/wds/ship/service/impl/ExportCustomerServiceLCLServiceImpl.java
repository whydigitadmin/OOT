package com.wds.ship.service.impl;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.repository.ExportCustomerServiceLCLRepository;
import com.wds.ship.service.ExportCustomerServiceLCLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ExportCustomerServiceLCLServiceImpl  implements ExportCustomerServiceLCLService {

    private final ExportCustomerServiceLCLRepository repository;

    @Autowired
    public ExportCustomerServiceLCLServiceImpl(ExportCustomerServiceLCLRepository repository) {
        this.repository = repository;
    }

    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo(){
        return repository.findAll();

    }
}
