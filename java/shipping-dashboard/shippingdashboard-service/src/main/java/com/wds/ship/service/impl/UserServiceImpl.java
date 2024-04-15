package com.wds.ship.service.impl;

import com.wds.ship.entity.MasterCompanyDetails;
import com.wds.ship.entity.User;
//import com.wds.ship.repository.StaffRepository;
import com.wds.ship.repository.MasterBranchRepository;
import com.wds.ship.repository.MasterCompanyRepository;
import com.wds.ship.repository.UserRepository;
import com.wds.ship.service.UserService;
import com.wds.ship.shared.user.*;
import com.wds.ship.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MasterCompanyRepository masterCompanyRepository;

    @Autowired
    MasterBranchRepository masterBranchRepository;
//    @Autowired
//    StaffRepository staffRepository;

//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
    /**
     * @param userId
     * @return
     */
    @Override
    public UserInfo findUserById(long userId) {
       User user = userRepository.findById(userId).orElse(null);
        return Utils.convert(user, UserInfo.class);
    }

    /**
     * @param name
     * @return
     */
    @Override
    public UserDetails findUserByName(String name) {
        User user =  userRepository.findByLoginName(name);
        UserDetails userDetails = new UserDetails();
        userDetails.setId(user.getId());
        userDetails.setEmail(user.getLoginName());
        userDetails.setPassword(user.getPassword());
        userDetails.setStatus(user.getStatus());
        List<String> roles = user.getUserGroups().stream().map(x -> String.valueOf(x.getUserGroup())).collect(Collectors.toList());
        userDetails.setRoles(roles);
        return userDetails;
    }

    @Override
    public UserDetails findByLoginInfo(String email) {
        User user =  userRepository.findByLoginName(email);
        UserDetails userDetails = new UserDetails();
        userDetails.setId(user.getId());
        userDetails.setEmail(user.getLoginName());
        userDetails.setPassword(user.getPassword());
        userDetails.setStatus(user.getStatus());
        userDetails.setCompanyId(user.getCompany());
        System.out.println( userDetails.getCompanyId());
        userDetails.setDeptName(user.getStaffDepartmentName());
        userDetails.setHomeDeptId(user.getHomeDepartmentId());
        userDetails.setHomeBranch(user.getHomeBranch());
        //List<String> roles = user.getUserGroups().stream().map(x -> String.valueOf(x.getUserGroup())).collect(Collectors.toList());
        List<String> roles = user.getRoleMapping().stream().map(x -> x.getRoleMaster().getRoleName()).collect(Collectors.toList());
        List<ProductRole> productRoles =user.getRoleMapping().stream().map(x ->  {
           ProductRole productRole = new ProductRole();
           productRole.setProductCode(x.getRoleMaster().getProductCode());
           productRole.setProductName(x.getRoleMaster().getProductName());
           productRole.setRoleId(x.getRoleMaster().getRoleId());
            productRole.setRoleCode(x.getRoleMaster().getRoleCode());
            productRole.setRoleName(x.getRoleMaster().getRoleName());
            return productRole;
        }).collect(Collectors.toList());
        userDetails.setRoles(roles);
        userDetails.setProductRoles(productRoles);

        userDetails.setCompanyIds(user.getCompanyList().stream().map(x -> x.getCompanyId()).collect(Collectors.toList()));
//        userDetails.setCompanyInfo(user.getCompanyList().stream().map(x -> {
//            CompnayIds companyInfo = new CompnayIds();
//            companyInfo.setCompanyName(x.getCompanyDetails().getCompanyName());
//            companyInfo.setCompanyId(x.getCompanyId());
//            return companyInfo;
//        }).collect(Collectors.toList()));

        userDetails.setCompanyInfo(user.getCompanyList().stream().map(x -> {
            CompnayIds companyInfo = new CompnayIds();
            Optional<MasterCompanyDetails> details = masterCompanyRepository.findById(x.getCompanyId());
            companyInfo.setCompanyName(details.get().getCompanyName());
            companyInfo.setStatus(details.get().getCompanyStatus());
            companyInfo.setCompanyId(x.getCompanyId());
            return companyInfo;
        }).collect(Collectors.toList()));


        userDetails.setBranchIds(user.getBranchList().stream().map(x ->
                {BranchIds branchIds = new BranchIds();
                    branchIds.setBranchId(x.getBranchId());
                    branchIds.setCompanyId(x.getCompanyId());
                    branchIds.setStatus(x.getStatus());
                    var details = masterBranchRepository.findById(x.getBranchId());
                    branchIds.setBranchName(details.get().getBranchName());
                    return branchIds;
                }
        ).collect(Collectors.toList()));
        userDetails.setSelectedCompany(user.getCompany());
        userDetails.setSelectedDepartment(Long.valueOf(user.getHomeBranch()));
        return userDetails;
    }

    /**
     * @param userId
     * @return
     */
    @Override
    public String updateUserById(long userId) {
        return null;
    }

//    @Override
//    public String updateUserById(long userId){
//        User user = userRepository.findById(userId).orElse(null);
//        if(null != user){
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
//            return "Password is updated Successfully";
//        }
//        return "User does not exist";
//    }
}
