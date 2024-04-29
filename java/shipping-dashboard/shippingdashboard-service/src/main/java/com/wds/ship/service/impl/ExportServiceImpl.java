package com.wds.ship.service.impl;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.wds.ship.entity.*;
import com.wds.ship.repository.*;
import com.wds.ship.service.ExportService;
import com.wds.ship.shared.lcl.export.CustomerServicePOJO;
import com.wds.ship.shared.lcl.export.ExportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportDetailsPOJO;
import com.wds.ship.shared.lcl.export.SalesSupportPOJO;
import com.wds.ship.shared.user.ExportLCLDetailsAction;
import com.wds.ship.shared.user.ExportOutofSla;
import com.wds.ship.shared.user.ExportWithinsla;
import com.wds.ship.shared.user.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    	List<ExportSalesSupportSea> list = exportSalesSupportSeaRepo.findByCompanyAndBranchAndDeptid(userDetails.getSelectedCompany(), userDetails.getSelectedBranch(), userDetails.getHomeDeptId());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportPOJO>>() {}.getType());
        return destinationList;
	}
    
    @Override
	public List<SalesSupportDetailsPOJO> getExportSalesSupportSeaDetailsInfo(ExportLCLDetailsAction action) {
    	List<ExportSalesSupportSeaDetails> list = exportSalesSupportSeaDetailsRepo.findByActionAndCompanyAndBrnidAndDeptid(action.getAction() , action.getCompany(), action.getBranch(), action.getDeptid());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<SalesSupportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<SalesSupportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

    @Override
    public List<CustomerServicePOJO> getLCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportCustomerServiceLCL> list = repository.findByCompanyAndBranchAndDeptid(userDetails.getSelectedCompany(), userDetails.getSelectedBranch(), userDetails.getHomeDeptId());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<CustomerServicePOJO> getFCLCustomerServiceInfo(UserDetails userDetails) {
        List<ExportFCLCustomerServiceEntity> list = exportFCLCustomerServiceRepository.findByCompanyAndBranchAndDeptid(userDetails.getSelectedCompany(), userDetails.getSelectedBranch(), userDetails.getHomeDeptId());

        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
        return destinationList;
    }
    
    @Override
	public List<ExportDetailsPOJO> getAllLCLDetails(ExportLCLDetailsAction action) {
    	List<ExportLCLDetails> list = lclRepo.findByActionAndCompany(action.getAction(), action.getCompany());
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
	public List<ExportDetailsPOJO> getExportLCLDetailsWithinSla(ExportWithinsla sla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla() , sla.getCompany() , sla.getBranch(), sla.getDeptid());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}
	
	@Override
	public List<ExportDetailsPOJO> getExportLCLDetailsOutofSla(ExportOutofSla sla) {
		List<ExportLCLDetails> list = lclRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla() , sla.getCompany() , sla.getBranch(), sla.getDeptid());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

    public List<ExportDetailsPOJO>getExportLCLDetailsOutofSlaV1(ExportOutofSla sla){
        List<ExportLCLDetails> list = null;
                //lclRepo.findByActionAndOutofsla(sla);
        Gson gson = new Gson();

        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<ExportDetailsPOJO> getAllFCLDetails(ExportLCLDetailsAction action) {
        List<ExportFCLDetails> list = fclRepo.findByAction(action.getAction());
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
    public List<ExportDetailsPOJO> getExportFCLDetailsWithinSla(ExportWithinsla sla) {
        List<ExportFCLDetails> list = fclRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
    }

    @Override
    public List<ExportDetailsPOJO> getExportFCLDetailsOutofSla(ExportOutofSla sla) {
        List<ExportFCLDetails> list = fclRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
    }
	// Sea BL Release Desk
	
	@Override
	public List<CustomerServicePOJO> getExportBLReleaseSeaServiceInfo(UserDetails userDetails) {
		 List<ExportBLReleaseDeskSea> list = exportBLReleaseDeskSeaRepo.findByCompanyAndBranchAndDeptid(userDetails.getSelectedCompany(), userDetails.getSelectedBranch(), userDetails.getHomeDeptId());

        Gson gson = new Gson();
	        String json = gson.toJson(list);
	        List<CustomerServicePOJO> destinationList = gson.fromJson(json, new TypeToken<List<CustomerServicePOJO>>() {}.getType());
	        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetails(ExportLCLDetailsAction action) {
		List<ExportBLReleaseDeskDetailsSea> list = exportBLReleaseDeskDetailsSeaRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetailsWithinSla(ExportWithinsla sla) {
		List<ExportBLReleaseDeskDetailsSea> list = exportBLReleaseDeskDetailsSeaRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseSeaDetailsOutofSla(ExportOutofSla sla) {
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
		List<ExportSalesSupportDetailsAir> list = exportSalesSupportDetailsAirRepo.findByAction(action.getAction());
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
		List<ExportCustomerServiceDetailsAir> list = exportCustomerServiceDetailsAirRepo.findByAction(action.getAction());
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
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByAction(action.getAction());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseAirDetailsWithinSla(ExportWithinsla sla) {
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByActionAndWithinsla(sla.getAction(),sla.getWithinsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}

	@Override
	public List<ExportDetailsPOJO> getExportBLReleaseAirDetailsOutofSla(ExportOutofSla sla) {
		List<ExportBLReleaseDeskDetailsAir> list = exportBLReleaseDeskDetailsAirRepo.findByActionAndOutofsla(sla.getAction(),sla.getOutofsla());
        Gson gson = new Gson();
        String json = gson.toJson(list);
        List<ExportDetailsPOJO> destinationList = gson.fromJson(json, new TypeToken<List<ExportDetailsPOJO>>() {}.getType());
        return destinationList;
	}


}
