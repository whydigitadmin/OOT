package com.wds.ship.service.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportFCLCustomerServiceEntity;
import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.repository.ExportCustomerServiceLCLRepository;
import com.wds.ship.repository.ExportFCLCustomerServiceRepository;
import com.wds.ship.repository.ExportLCLRepository;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ExportServiceImpl implements ExportService {

    private final ExportCustomerServiceLCLRepository repository;

    private final ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository;
    
    private final ExportLCLRepository lclRepo;
    

    @Autowired
    public ExportServiceImpl(ExportCustomerServiceLCLRepository repository, ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository,ExportLCLRepository lclRepo) {
        this.repository = repository;
        this.exportFCLCustomerServiceRepository = exportFCLCustomerServiceRepository;
		this.lclRepo = lclRepo;
        
    }

    public List<ExportCustomerServiceLCL> getCustomerServiceLCLInfo(){
        return repository.findAll();

    }

    @Override
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportCustomerServiceLCL> list = repository.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportFCLCustomerServiceEntity> list = exportFCLCustomerServiceRepository.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }

	@Override
	public List<ExportLCLDetails> getAllLCLDetails(String action) {
		List<ExportLCLDetails>details=new ArrayList<>();
		
//		return lclRepo.findByAction(action);
		
		List<ExportLCLDetails> list = lclRepo.findByAction(action);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportLCLDetails> destinationList = gson.fromJson(json, new TypeToken<List<ExportLCLDetails>>() {}.getType());
        return list;
		
	}

}
