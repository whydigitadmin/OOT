//package com.wds.ship.security;
//
//import com.wds.ship.entity.Role;
//import com.wds.ship.entity.User;
//import com.wds.ship.repository.UserRepository;
//import com.wds.ship.shared.user.UserInfo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//    @Autowired
//    UserRepository userRepository;
//    /**
//     * @param username
//     * @return
//     * @throws UsernameNotFoundException
//     */
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user =userRepository.findByLoginName(username);
//        return new org.springframework.security.core.userdetails.User(user.getLoginName() , passwordEncoder.encode(user.getPassword()), getRoles());
//        //return null;
//    }
//
//
//
//    // Need to - Temp
//    private List<Role> getRoles(){
//        Role role1 = new Role();
//        role1.setId(1);
//        role1.setName("ADMIN");
//        Role role2 = new Role();
//        role2.setId(2);
//        role2.setName("USER");
////        Role role3 = new Role();
////        role1.setId(1);
////        role1.setName("ADMIN");
//        List<Role> roles = new ArrayList<>();
//        roles.add(role1);
//        roles.add(role2);
//        //roles.add(role3);
//        return roles;
//    }
//}
