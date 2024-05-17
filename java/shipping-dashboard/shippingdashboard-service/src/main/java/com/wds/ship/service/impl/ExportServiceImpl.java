package com.wds.ship.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.ExportBLReleaseDeskAir;
import com.wds.ship.entity.ExportBLReleaseDeskDetailsAir;
import com.wds.ship.entity.ExportBLReleaseDeskDetailsSea;
import com.wds.ship.entity.ExportBLReleaseDeskSea;
import com.wds.ship.entity.ExportCustomerServiceAir;
import com.wds.ship.entity.ExportCustomerServiceDetailsAir;
import com.wds.ship.entity.ExportCustomerServiceLCL;
import com.wds.ship.entity.ExportFCLCustomerServiceEntity;
import com.wds.ship.entity.ExportFCLDetails;
import com.wds.ship.entity.ExportLCLDetails;
import com.wds.ship.entity.ExportSalesSupportAir;
import com.wds.ship.entity.ExportSalesSupportDetailsAir;
import com.wds.ship.entity.ExportSalesSupportSea;
import com.wds.ship.entity.ExportSalesSupportSeaDetails;
import com.wds.ship.repository.ExportBLReleaseDeskAirRepository;
import com.wds.ship.repository.ExportBLReleaseDeskDetailsAirRepository;
import com.wds.ship.repository.ExportBLReleaseDeskDetailsSeaRepository;
import com.wds.ship.repository.ExportBLReleaseDeskSeaRepository;
import com.wds.ship.repository.ExportCustomerServiceAirRepository;
import com.wds.ship.repository.ExportCustomerServiceDetailsAirRepository;
import com.wds.ship.repository.ExportCustomerServiceLCLRepository;
import com.wds.ship.repository.ExportFCLCustomerServiceRepository;
import com.wds.ship.repository.ExportFCLRepository;
import com.wds.ship.repository.ExportLCLRepository;
import com.wds.ship.repository.ExportSalesSupportAirRepository;
import com.wds.ship.repository.ExportSalesSupportDetailsAirRepository;
import com.wds.ship.repository.ExportSalesSupportSeaDetailsRepository;
import com.wds.ship.repository.ExportSalesSupportSeaRepository;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.DetailsAction;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.UserDetails;
@Service
public class ExportServiceImpl implements ExportService {

    private final ExportCustomerServiceLCLRepository repository;

    private final ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository;
    
    private final ExportLCLRepository lclRepo;

    private final ExportFCLRepository fclRepo;
    
    private final ExportCustomerServiceAirRepository airExportRepo;
    
    private final ExportCustomerServiceDetailsAirRepository exportCustomerServiceDetailsAirRepo;
    
    private final ExportSalesSupportSeaRepository exportSalesSupportSeaRepo;
    
    private final ExportSalesSupportSeaDetailsRepository exportSalesSupportSeaDetailsRepo;
    
    private final ExportSalesSupportAirRepository exportSalesSupportAirRepo;
    
    private final ExportSalesSupportDetailsAirRepository exportSalesSupportDetailsAirRepo;
    
    private final ExportBLReleaseDeskSeaRepository exportBLReleaseDeskSeaRepo;
    
    private final ExportBLReleaseDeskDetailsSeaRepository exportBLReleaseDeskDetailsSeaRepo;
    
    private final ExportBLReleaseDeskAirRepository exportBLReleaseDeskAirRepo;
    
    private final ExportBLReleaseDeskDetailsAirRepository exportBLReleaseDeskDetailsAirRepo;
    

    @Autowired
    public ExportServiceImpl(ExportCustomerServiceLCLRepository repository, ExportFCLCustomerServiceRepository exportFCLCustomerServiceRepository,
    		ExportLCLRepository lclRepo, ExportFCLRepository fclRepo, ExportCustomerServiceAirRepository airExportRepo,ExportSalesSupportSeaRepository exportSalesSupportSeaRepo,
    		ExportSalesSupportSeaDetailsRepository exportSalesSupportSeaDetailsRepo,ExportSalesSupportAirRepository exportSalesSupportAirRepo,
    		ExportSalesSupportDetailsAirRepository exportSalesSupportDetailsAirRepo,ExportCustomerServiceDetailsAirRepository exportCustomerServiceDetailsAirRepo,
    		ExportBLReleaseDeskSeaRepository exportBLReleaseDeskSeaRepo,ExportBLReleaseDeskDetailsSeaRepository exportBLReleaseDeskDetailsSeaRepo,
    		ExportBLReleaseDeskAirRepository exportBLReleaseDeskAirRepo,ExportBLReleaseDeskDetailsAirRepository exportBLReleaseDeskDetailsAirRepo
    		) {
        this.repository = repository;
        this.exportFCLCustomerServiceRepository = exportFCLCustomerServiceRepository;
		this.lclRepo = lclRepo;
        this.fclRepo = fclRepo;
		this.airExportRepo=airExportRepo;
		this.exportCustomerServiceDetailsAirRepo = exportCustomerServiceDetailsAirRepo;
		this.exportSalesSupportSeaRepo=exportSalesSupportSeaRepo;
		this.exportSalesSupportSeaDetailsRepo=exportSalesSupportSeaDetailsRepo;
		this.exportSalesSupportAirRepo = exportSalesSupportAirRepo;
		this.exportSalesSupportDetailsAirRepo = exportSalesSupportDetailsAirRepo;
		this.exportBLReleaseDeskSeaRepo = exportBLReleaseDeskSeaRepo;
		this.exportBLReleaseDeskDetailsSeaRepo = exportBLReleaseDeskDetailsSeaRepo;
		this.exportBLReleaseDeskAirRepo = exportBLReleaseDeskAirRepo;
		this.exportBLReleaseDeskDetailsAirRepo = exportBLReleaseDeskDetailsAirRepo;
        
    }
    
    // Sea 
    @Override
	public List<SalesSupportPOJO> getExportSalesSupportSeaInfo(UserDetails userDetails) {
    	List<ExportSalesSupportSea> list = exportSalesSupportSeaRepo.findByCompanyAndBranch(userDetails.getSelectedCompany(), userDetails.getSelectedBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}
    
    @Override
	public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action) {
    	List<ExportSalesSupportSeaDetails> list = exportSalesSupportSeaDetailsRepo.findByActionAndCompanyAndBrnid(action.getAction() , action.getCompany(), action.getBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

    @Override
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportCustomerServiceLCL> list = repository.findByCompanyAndBranch(userDetails.getSelectedCompany(), userDetails.getSelectedBranch());//####, userDetails.getHomeDeptId()----removed
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportFCLCustomerServiceEntity> list = exportFCLCustomerServiceRepository.findByCompanyAndBranch(userDetails.getSelectedCompany(),userDetails.getSelectedBranch());//####, userDetails.getHomeDeptId()----removed

        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }
    
    @Override
	public List<ExportDetailsPOJO> getAllLCLDetails(DetailsAction action) {
    	List<ExportLCLDetails> list = lclRepo.findByActionAndCompanyAndBranch(action.getAction(), action.getCompany(), action.getBranch());//##### , action.getDeptid()
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
	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(DetailsAction sla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla() , sla.getCompany() , sla.getBranch()); //##### , action.getDeptid()
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	@Override
	public List<ExportDetailsPOJO> getExportLCLDetailsOutofSla(DetailsAction sla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla() , sla.getCompany() , sla.getBranch()); //##### , action.getDeptid()
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

    @Override
    public List<ExportDetailsPOJO> getAllFCLDetails(DetailsAction action) {
        List<ExportFCLDetails> list = fclRepo.findByActionAndCmpyAndBrnid(action.getAction(),action.getCompany(), action.getBranch());
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
    public List<ExportDetailsPOJO> getExportFCLDetailsWithinSla(DetailsAction sla) {
        List<ExportFCLDetails> list = fclRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<ExportDetailsPOJO> getExportFCLDetailsOutofSla(DetailsAction
    		sla) {
        List<ExportFCLDetails> list = fclRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
    }
	// Sea BL Release Desk
	
	@Override
	public List<CustomerServicePOJO> getExportBLReleaseSeaServiceInfo(UserDetails userDetails) {
		 List<ExportBLReleaseDeskSea> list = exportBLReleaseDeskSeaRepo.findByCompanyAndBranch(userDetails.getSelectedCompany(), userDetails.getSelectedBranch());//########, userDetails.getHomeDeptId()

        Gson gson = new Gson();
	        String json = gson.toJson(list);
	        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
	        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetails(ExportLCLDetailsAction action) {
		List<ExportBLReleaseDeskDetailsSea> list = exportBLReleaseDeskDetailsSeaRepo.findByActionAndCompanyAndBranch(action.getAction(),action.getCompany(), action.getBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetailsWithinSla(DetailsAction sla) {
		List<ExportBLReleaseDeskDetailsSea> list = exportBLReleaseDeskDetailsSeaRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetailsOutofSla(DetailsAction sla) {
		List<ExportBLReleaseDeskDetailsSea> list = exportBLReleaseDeskDetailsSeaRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	// Air Export Service 
	
	@Override
	public List<SalesSupportPOJO> getExportSalesSupportAirInfo(UserDetails userDetails) {
		List<ExportSalesSupportAir> list = exportSalesSupportAirRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<SalesSupportDetailsPOJO> getExportSalesSupportAirDetailsInfo(ExportLCLDetailsAction action) {
		List<ExportSalesSupportDetailsAir> list = exportSalesSupportDetailsAirRepo.findByActionAndCompanyAndBranch(action.getAction(),action.getCompany(), action.getBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	// Air export Customer Service
	@Override
	public List<CustomerServicePOJO> getExportCustomerServiceAirInfo(UserDetails userDetails) {
		List<ExportCustomerServiceAir> list = airExportRepo.findAll();
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportCustomerServiceDetailsAirInfor(ExportLCLDetailsAction action) {
		List<ExportCustomerServiceDetailsAir> list = exportCustomerServiceDetailsAirRepo.findByActionAndComapanyAndBranch(action.getAction(),action.getCompany(), action.getBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportCustomerServiceDetailsAirWithinsla(String action, int withinsla) {
		List<ExportCustomerServiceDetailsAir> list = exportCustomerServiceDetailsAirRepo.findByActionAndWithinsla(action,withinsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportCustomerServiceDetailsAirOutofsla(String action, int outofsla) {
		List<ExportCustomerServiceDetailsAir> list = exportCustomerServiceDetailsAirRepo.findByActionAndOutofsla(action,outofsla);
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	//Air Export BL Release Desk

	@Override
	public List<CustomerServicePOJO> getExportBLReleaseAirServiceInfo(UserDetails userDetails) {
		 List<ExportBLReleaseDeskAir> list = exportBLReleaseDeskAirRepo.findAll();
	        Gson gson = new Gson();
	        String json = gson.toJson(list);
	        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
	        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseAirDetails(ExportLCLDetailsAction action) {
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByActionAndCompanyAndBranch(action.getAction(),action.getCompany(), action.getBranch());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseAirDetailsWithinSla(DetailsAction sla) {
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseAirDetailsOutofSla(DetailsAction sla) {
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}


}
