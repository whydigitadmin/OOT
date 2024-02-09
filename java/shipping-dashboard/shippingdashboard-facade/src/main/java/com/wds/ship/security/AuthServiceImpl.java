package com.wds.ship.security;

import com.wds.ship.security.entity.User;
import com.wds.ship.security.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements UserDetailsService {
    @Autowired
    AuthRepository authRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<GrantedAuthority> authorities = new ArrayList<>();
        User user = authRepository.findByLoginName(username);
        if(user == null){
            throw new UsernameNotFoundException("User details not found" + username);
        }
        List<String> roles = user.getUserGroups().stream().map(x -> String.valueOf(x.getUserGroup())).collect(Collectors.toList());
        roles.forEach(x -> {
            System.out.println(x);
        });
        user.getRoleMapping().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getRoleMaster().getProductName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getLoginName() , "123", authorities);
    }
}
// ALLEY.NG@FMGLOBALLOGISTICS.COM
