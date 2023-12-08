package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportPlanner;
import com.wds.ship.repository.ExportPlannerRepository;
import com.wds.ship.service.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportPlannerServiceImpl implements ExportPlannerService {
	
	
	private final ExportPlannerRepository exportplannerepository;
	
	@Autowired
	public ExportPlannerServiceImpl(ExportPlannerRepository exportplannerepository) {
        this.exportplannerepository = exportplannerepository;
    }

	public List<ExportPlanner> getExportPlanner() {
		
		return exportplannerepository.findAll();
	}

	@Override
	public List<CustomerServicePOJO> getExportPlannerInfo(UserDetails userDetails) {
		List<ExportPlanner> list = exportplannerepository.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

}
