package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportDocumentation;
import com.wds.ship.repository.ExportDocumentationRepository;
import com.wds.ship.service.ExportDocumentationService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ExportDocumentationServiceImpl implements ExportDocumentationService{
	
	private final ExportDocumentationRepository exportdocumentationrepo;
	
	@Autowired
	public ExportDocumentationServiceImpl(ExportDocumentationRepository exportdocumentationrepo) {
		this.exportdocumentationrepo=exportdocumentationrepo;
	}

	@Override
	public List<ExportDocumentation> getExportDocumentation() {
		
		return exportdocumentationrepo.findAll();
	}
	
	@Override
	public List<CustomerServicePOJO> getExportDocumentationServiceInfo(UserDetails userDetails) {
		List<ExportDocumentation> list = exportdocumentationrepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

}
