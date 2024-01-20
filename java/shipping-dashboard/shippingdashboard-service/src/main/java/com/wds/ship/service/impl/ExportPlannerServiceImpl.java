package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportDocumentationDetails;
import com.wds.ship.entity.ExportPlanner;
import com.wds.ship.entity.ExportPlannerDetails;
import com.wds.ship.repository.ExportPlannerDetailsRepo;
import com.wds.ship.repository.ExportPlannerRepository;
import com.wds.ship.service.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportPlannerServiceImpl implements ExportPlannerService {
	
	@Autowired
	private final ExportPlannerRepository exportplannerepository;
	
	@Autowired
	ExportPlannerDetailsRepo plannerDetailsRepo;
	
	
	
	
	public ExportPlannerServiceImpl(ExportPlannerRepository exportplannerepository,ExportPlannerDetailsRepo plannerDetailsRepo) {
        this.exportplannerepository = exportplannerepository;
        this.plannerDetailsRepo=plannerDetailsRepo;
       
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
	
	
	@Override
	public List<ExportDetailsPOJO> getExportPlannerDetailsCount(ExportLCL action) {
		List<ExportPlannerDetails> planner=plannerDetailsRepo.findAllByAction(action.getAction());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportPlannerDetailsWithinsla(String action, int withinsla) {
		List<ExportPlannerDetails> planner=plannerDetailsRepo.findByActionAndWithinsla(action,withinsla);
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	
	@Override
	public List<ExportDetailsPOJO> getExportPlannerDetailsOutofsla(String action, int outofsla) {
		List<ExportPlannerDetails> planner=plannerDetailsRepo.findByActionAndOutofsla(action,outofsla);
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	

}
