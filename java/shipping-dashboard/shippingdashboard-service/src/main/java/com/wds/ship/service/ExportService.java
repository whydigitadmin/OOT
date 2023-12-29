package com.wds.ship.service;

import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportLCLDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
<<<<<<< HEAD
//import com.wds.ship.shared.lcl.export.ExportLCLDetailsPOJO;
//import com.wds.ship.shared.user.ExportLCL;
=======
>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95
import com.wds.ship.shared.user.UserDetails;

import java.util.List;

public interface ExportService {

    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo();

    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails);

    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails);

<<<<<<< HEAD
//    public List<ExportLCLDetailsPOJO> getAllLCLDetails(ExportLCL action);
    
    public List<ExportLCLDetailsPOJO> getAllLCLDetails(String action);
=======
    public List<ExportLCLDetailsPOJO> getAllLCLDetails(ExportLCL action);

>>>>>>> c1d9f5100e2c67afb5391849f9bc0483ca1fed95

}
