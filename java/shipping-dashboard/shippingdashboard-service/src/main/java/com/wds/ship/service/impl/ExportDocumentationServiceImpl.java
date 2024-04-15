package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.entity.ExportDocumentationAir;
import com.wds.ship.entity.ExportDocumentationDetails;
import com.wds.ship.entity.ExportDocumentationDetailsAir;
import com.wds.ship.repository.ExportDocumentationAirRepository;
import com.wds.ship.repository.ExportDocumentationDetailsAirRepository;
import com.wds.ship.repository.ExportDocumentationDetailsRepository;
import com.wds.ship.repository.ExportDocumentationRepository;
import com.wds.ship.service.ExportDocumentationService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportDocumentationServiceImpl implements ExportDocumentationService{
	
	
	private final ExportDocumentationRepository exportdocumentationrepo;
	
	private final ExportDocumentationDetailsRepository documentationDetailsRepo;
	
	private final ExportDocumentationAirRepository exportDocumentationAirRepo;
	
	private final ExportDocumentationDetailsAirRepository exportDocumentationDetailsAirRepo;
	
	@Autowired
	public ExportDocumentationServiceImpl(ExportDocumentationRepository exportdocumentationrepo,
			ExportDocumentationDetailsRepository documentationDetailsRepo,ExportDocumentationAirRepository exportDocumentationAirRepo,
			ExportDocumentationDetailsAirRepository exportDocumentationDetailsAirRepo) {
		this.exportdocumentationrepo=exportdocumentationrepo;
		this.documentationDetailsRepo=documentationDetailsRepo;
		this.exportDocumentationAirRepo = exportDocumentationAirRepo;
		this.exportDocumentationDetailsAirRepo = exportDocumentationDetailsAirRepo;
	}

	@Override
	public List<ExportDocumentation> getExportDocumentation() {
		
		return exportdocumentationrepo.findAll();
	}
	
	@Override
	public List<CustomerServicePOJO> getExportDocumentationServiceInfo(UserDetails userDetails) {
		List<ExportDocumentation> list = exportdocumentationrepo.findByCompanyAndBranch(userDetails.getSelectedCompany(), userDetails.getSelectedDepartment());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	
	@Override
	public List<ExportDetailsPOJO> getExportDocumentationDetailsCount(ExportLCL action) {
		List<ExportDocumentationDetails> documentation=documentationDetailsRepo.findAllByAction(action.getAction());
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportDocumentationDetailsWithinsla(String action, int withinsla) {
		List<ExportDocumentationDetails> documentation=documentationDetailsRepo.findAllByActionAndWithinsla(action,withinsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	
	@Override
	public List<ExportDetailsPOJO> getExportDocumentationDetailsOutofsla(String action, int outofsla) {
		List<ExportDocumentationDetails> documentation=documentationDetailsRepo.findAllByActionAndOutofsla(action,outofsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	// Air Export Documentation
	
	@Override
	public List<CustomerServicePOJO> getExportDocumentationServiceAirInfo(UserDetails userDetails) {
		List<ExportDocumentationAir> list = exportDocumentationAirRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	
	@Override
	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsCount(ExportLCL action) {
		List<ExportDocumentationDetailsAir> documentation=exportDocumentationDetailsAirRepo.findAllByAction(action.getAction());
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsWithinsla(String action, int withinsla) {
		List<ExportDocumentationDetailsAir> documentation=exportDocumentationDetailsAirRepo.findAllByActionAndWithinsla(action,withinsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	
	@Override
	public List<ExportDetailsPOJO> getExportDocumentationAirDetailsOutofsla(String action, int outofsla) {
		List<ExportDocumentationDetailsAir> documentation=exportDocumentationDetailsAirRepo.findAllByActionAndOutofsla(action,outofsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

}
