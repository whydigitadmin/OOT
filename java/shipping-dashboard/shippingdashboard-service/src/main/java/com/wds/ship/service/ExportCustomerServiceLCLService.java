package com.wds.ship.service;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

import java.util.List;

public interface ExportCustomerServiceLCLService {

    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo();

    public List<CustomerServicePOJO> getInfo(UserDetails userDetails);
}
