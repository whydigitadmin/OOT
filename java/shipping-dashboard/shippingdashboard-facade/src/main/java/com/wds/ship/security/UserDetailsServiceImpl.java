//package com.wds.ship.security;
//
//
//import com.wds.ship.service.LoginService;
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
//import java.util.stream.Collectors;
//
//@Service
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    private BCryptPasswordEncoder passwordEncoder;
//
//    @Autowired
//    LoginService loginService;
//
//    /**
//     * @param username
//     * @return
//     * @throws UsernameNotFoundException
//     */
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        com.wds.ship.shared.user.UserDetails userDetails = new com.wds.ship.shared.user.UserDetails();
//        userDetails.setEmail(username);
//        userDetails.setPassword("123");
//        //userDetails = loginService.loginInfo(userDetails);
//        List<String> list =new ArrayList<>();
//        list.add("6");
//        list.add("17");
//        list.add("34");
//        list.add("65");
//        List<Role> roles = list.stream().map( x -> new Role(x)).collect(Collectors.toList());
//        //List<Role> roles = userDetails.getRoles().stream().map( x -> new Role(x)).collect(Collectors.toList());
//        return new org.springframework.security.core.userdetails.User(userDetails.getEmail() , passwordEncoder.encode(userDetails.getPassword()) , roles);
//    }
//
//}
