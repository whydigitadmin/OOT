package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportDocumentationDetails;
import com.wds.ship.entity.ExportSalesSupportSea;
import com.wds.ship.entity.ExportSalesSupportSeaDetails;
import com.wds.ship.entity.ImportCustomerServiceFCL;
import com.wds.ship.entity.ImportCustomerServiceLCL;
import com.wds.ship.entity.ImportCustomerServiceLCLDetails;
import com.wds.ship.entity.ImportDocumentation;
import com.wds.ship.entity.ImportDocumentationDetails;
import com.wds.ship.entity.ImportSalesSupportAir;
import com.wds.ship.entity.ImportSalesSupportDetailsAir;
import com.wds.ship.entity.ImportSalesSupportSea;
import com.wds.ship.entity.ImportSalesSupportSeaDetails;
import com.wds.ship.repository.ImportCustomerServiceFCLRepository;
import com.wds.ship.repository.ImportCustomerServiceLCLDetailsRepository;
import com.wds.ship.repository.ImportCustomerServiceLCLRepository;
import com.wds.ship.repository.ImportDocumentationDetailsRepository;
import com.wds.ship.repository.ImportDocumentationRepository;
import com.wds.ship.repository.ImportSalesSupportAirRepository;
import com.wds.ship.repository.ImportSalesSupportDetailsAirRepository;
import com.wds.ship.repository.ImportSalesSupportSeaDetailsRepository;
import com.wds.ship.repository.ImportSalesSupportSeaRepository;
import com.wds.ship.service.ImportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;

@Service
public class ImportServiceImpl implements ImportService {
	
	private final ImportCustomerServiceLCLRepository importLclRepo;
	
	private final ImportCustomerServiceFCLRepository importFclRepo;
	
	private final ImportDocumentationRepository importDocumentationRepo;
	
	private final ImportCustomerServiceLCLDetailsRepository importLclDetailsRepo;
	
	private final ImportDocumentationDetailsRepository importDocumentationDetailsRepo;
	
	private final ImportSalesSupportSeaDetailsRepository importSalesSupportSeaDetailsRepo;
	
	private final ImportSalesSupportSeaRepository importSalesSupportSeaRepo;
	
	private final ImportSalesSupportAirRepository importSalesSupportAirRepo;
	
	private final ImportSalesSupportDetailsAirRepository importSalesSupportDetailsAirRepo;
	
	@Autowired
	public ImportServiceImpl(ImportSalesSupportSeaDetailsRepository importSalesSupportSeaDetailsRepo,ImportSalesSupportSeaRepository importSalesSupportSeaRepo,
			ImportCustomerServiceLCLRepository importLclRepo,ImportCustomerServiceFCLRepository importFclRepo,ImportDocumentationRepository importDocumentationRepo,
			ImportCustomerServiceLCLDetailsRepository importLclDetailsRepo,ImportDocumentationDetailsRepository importDocumentationDetailsRepo,
			ImportSalesSupportAirRepository importSalesSupportAirRepo,ImportSalesSupportDetailsAirRepository importSalesSupportDetailsAirRepo) {
        this.importLclRepo = importLclRepo;
        this.importFclRepo= importFclRepo;
        this.importDocumentationRepo=importDocumentationRepo;
        this.importLclDetailsRepo=importLclDetailsRepo;
        this.importDocumentationDetailsRepo=importDocumentationDetailsRepo;
        this.importSalesSupportSeaDetailsRepo=importSalesSupportSeaDetailsRepo;
		this.importSalesSupportSeaRepo = importSalesSupportSeaRepo;
		this.importSalesSupportAirRepo = importSalesSupportAirRepo;
		this.importSalesSupportDetailsAirRepo = importSalesSupportDetailsAirRepo;
		
    }

	
	@Override
	public List<SalesSupportPOJO> getImportSalesSupportSeaInfo(UserDetails userDetails) {
		List<ImportSalesSupportSea> list = importSalesSupportSeaRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<SalesSupportDetailsPOJO> getImportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action) {
		List<ImportSalesSupportSeaDetails> list = importSalesSupportSeaDetailsRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	
	@Override
	public List<CustomerServicePOJO> getImportLCLCustomerServiceInfo(UserDetails userDetails) {
		List<ImportCustomerServiceLCL> list = importLclRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<CustomerServicePOJO> getImportFCLCustomerServiceInfo(UserDetails userDetails) {
		List<ImportCustomerServiceFCL> list = importFclRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getImportLCLDetailsByAction(ExportLCLDetailsAction action) {
		List<ImportCustomerServiceLCLDetails> list = importLclDetailsRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getImportLCLDetailsWithinSla(String action, int withinsla) {
		List<ImportCustomerServiceLCLDetails> list = importLclDetailsRepo.findByActionAndWithinsla(action,withinsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getImportLCLDetailsOutofSla(String action, int outofsla) {
		List<ImportCustomerServiceLCLDetails> list = importLclDetailsRepo.findByActionAndOutofsla(action,outofsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	// Sea Import Documentation
	@Override
	public List<CustomerServicePOJO> getImportDocumentationServiceInfo(UserDetails userDetails) {
		List<ImportDocumentation> list = importDocumentationRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;	}

	@Override
	public List<ExportDetailsPOJO> getImportDocumentationDetailsByAction(ExportLCLDetailsAction action) {
		List<ImportDocumentationDetails> list = importDocumentationDetailsRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getImportDocumentationDetailsWithinSla(String action, int withinsla) {
		List<ImportDocumentationDetails> documentation=importDocumentationDetailsRepo.findAllByActionAndWithinsla(action,withinsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getImportDocumentationDetailsOutofSla(String action, int outofsla) {
		List<ImportDocumentationDetails> documentation=importDocumentationDetailsRepo.findAllByActionAndOutofsla(action,outofsla);
		Gson gson = new Gson();
        String json = gson.toJson(documentation);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

// Air Import
	
	@Override
	public List<SalesSupportPOJO> getImportSalesSupportAirInfo(UserDetails userDetails) {
		List<ImportSalesSupportAir> list = importSalesSupportAirRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}


	@Override
	public List<SalesSupportDetailsPOJO> getImportSalesSupportDetailsAirInfo(ExportLCLDetailsAction action) {
		List<ImportSalesSupportDetailsAir> list = importSalesSupportDetailsAirRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	

	

}
