package com.wds.ship.service.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportCustomerServiceAir;
import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportFCLCustomerServiceEntity;
import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.entity.ExportSalesSupportSea;
import com.wds.ship.entity.ExportSalesSupportSeaDetails;
import com.wds.ship.repository.ExportCustomerServiceAirRepository;
import com.wds.ship.repository.ExportCustomerServiceLCLRepository;
import com.wds.ship.repository.ExportFCLCustomerServiceRepository;
import com.wds.ship.repository.ExportLCLRepository;
import com.wds.ship.repository.ExportSalesSupportSeaDetailsRepository;
import com.wds.ship.repository.ExportSalesSupportSeaRepository;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCL;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ExportServiceImpl implements ExportService {

    private final ExportCustomerServiceLCLRepository repository;

    private final ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository;
    
    private final ExportLCLRepository lclRepo;
    
    private final ExportCustomerServiceAirRepository airExportRepo;
    
    private final ExportSalesSupportSeaRepository exportSalesSupportSeaRepo;
    
    private final ExportSalesSupportSeaDetailsRepository exportSalesSupportSeaDetailsRepo;
    

    @Autowired
    public ExportServiceImpl(ExportCustomerServiceLCLRepository repository, ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository,
    		ExportLCLRepository lclRepo,ExportCustomerServiceAirRepository airExportRepo,ExportSalesSupportSeaRepository exportSalesSupportSeaRepo,
    		ExportSalesSupportSeaDetailsRepository exportSalesSupportSeaDetailsRepo) {
        this.repository = repository;
        this.exportFCLCustomerServiceRepository = exportFCLCustomerServiceRepository;
		this.lclRepo = lclRepo;
		this.airExportRepo=airExportRepo;
		this.exportSalesSupportSeaRepo=exportSalesSupportSeaRepo;
		this.exportSalesSupportSeaDetailsRepo=exportSalesSupportSeaDetailsRepo;
        
    }
    
    @Override
	public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(UserDetails userDetails) {
    	List<ExportSalesSupportSea> list = exportSalesSupportSeaRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}
    
    @Override
	public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action) {
    	List<ExportSalesSupportSeaDetails> list = exportSalesSupportSeaDetailsRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
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
	public List<ExportDetailsPOJO> getAllLCLDetails(ExportLCLDetailsAction action) {
    	List<ExportLCLDetails> list = lclRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

//	@Override
//	public List<ExportDetailsPOJO> getAllLCLDetails(String action) {
//		List<ExportLCLDetails> list = lclRepo.findByAction(action);
//        Gson gson = new Gson();
//        String json = gson.toJson(list);
//        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
//        return destinationList;
//		
//	}


	@Override
	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(String action, int withinsla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndWithinsla(action,withinsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	@Override
	public List<ExportDetailsPOJO> getExportLCLDetailsOutofSla(String action, int outofsla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndOutofsla(action,outofsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	// Air Export Service 
	
	@Override
	public List<CustomerServicePOJO> getExportCustomerServiceAirInfo(UserDetails userDetails) {
		List<ExportCustomerServiceAir> list = airExportRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	

	


	

}
