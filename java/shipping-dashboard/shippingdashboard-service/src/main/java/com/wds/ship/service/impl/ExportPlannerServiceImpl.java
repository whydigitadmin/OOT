package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportPlanner;
import com.wds.ship.entity.ExportPlannerAir;
import com.wds.ship.entity.ExportPlannerDetails;
import com.wds.ship.entity.ExportPlannerDetailsAir;
import com.wds.ship.repository.ExportPlannerAirRepository;
import com.wds.ship.repository.ExportPlannerDetailsAirRepository;
import com.wds.ship.repository.ExportPlannerDetailsRepo;
import com.wds.ship.repository.ExportPlannerRepository;
import com.wds.ship.service.ExportPlannerService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportPlannerServiceImpl implements ExportPlannerService {
	
	@Autowired
	private final ExportPlannerRepository exportplannerepository;
	
	private final ExportPlannerDetailsRepo plannerDetailsRepo;
	
	private final ExportPlannerAirRepository exportPlannerAirRepo;
	
	private final ExportPlannerDetailsAirRepository exportPlannerDetailsAirRepo;
	
	@Autowired
	public ExportPlannerServiceImpl(ExportPlannerRepository exportplannerepository,ExportPlannerDetailsRepo plannerDetailsRepo,
			ExportPlannerAirRepository exportPlannerAirRepo,ExportPlannerDetailsAirRepository exportPlannerDetailsAirRepo) {
        this.exportplannerepository = exportplannerepository;
        this.plannerDetailsRepo=plannerDetailsRepo;
		this.exportPlannerAirRepo = exportPlannerAirRepo;
		this.exportPlannerDetailsAirRepo = exportPlannerDetailsAirRepo;
       
    }

	public List<ExportPlanner> getExportPlanner() {
		
		return exportplannerepository.findAll();
	}

	@Override
	public List<CustomerServicePOJO> getExportPlannerInfo(UserDetails userDetails) {
		List<ExportPlanner> list = exportplannerepository.findByCompanyAndBranch(userDetails.getSelectedCompany(), userDetails.getSelectedBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}
	
	
//	@Override
//	public List<ExportDetailsPOJO> getExportPlannerDetailsCount(DetailsAction action) {
//		List<ExportPlannerDetails> planner=plannerDetailsRepo.findAllByActionAndCompanyAndBranch(action.getAction(),action.getCompany(),action.getBranch());
//		Gson gson = new Gson();
//        String json = gson.toJson(planner);
//        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
//        return destinationList;
//	}

	@Override
	public List<ExportDetailsPOJO> getExportPlannerDetailsWithinsla(DetailsAction sla) {
		List<ExportPlannerDetails> planner=plannerDetailsRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	
	@Override
	public List<ExportDetailsPOJO> getExportPlannerDetailsOutofsla(DetailsAction sla) {
		List<ExportPlannerDetails> planner=plannerDetailsRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	// Air Export planner
	@Override
	public List<CustomerServicePOJO> getExportPlannerAirInfo(UserDetails userDetails) {
		List<ExportPlannerAir> list = exportPlannerAirRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}
	
	@Override
	public List<ExportDetailsPOJO> getExportPlannerAirDetailsCount(ExportLCL action) {
		List<ExportPlannerDetailsAir> planner=exportPlannerDetailsAirRepo.findAllByAction(action.getAction(),action.getCompany(),action.getBranch());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportPlannerAirDetailsWithinsla(DetailsAction sla) {
		List<ExportPlannerDetailsAir> planner=exportPlannerDetailsAirRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportPlannerAirDetailsOutofsla(DetailsAction sla) {
		List<ExportPlannerDetailsAir> planner=exportPlannerDetailsAirRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
		Gson gson = new Gson();
        String json = gson.toJson(planner);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	

}
