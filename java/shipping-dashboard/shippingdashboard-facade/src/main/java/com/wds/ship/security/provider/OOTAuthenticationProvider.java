package com.wds.ship.security.provider;

import com.wds.ship.security.entity.User;
import com.wds.ship.security.repository.AuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
@Component
public class OOTAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    AuthRepository authRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String pwd = authentication.getCredentials().toString();
        List<GrantedAuthority> authorities = new ArrayList<>();
        User user = authRepository.findByLoginName(email);
        if( null != user){
           if(passwordEncoder.matches(pwd, "123")) {
               List<String> roles = user.getUserGroups().stream().map(x -> String.valueOf(x.getUserGroup())).collect(Collectors.toList());
               user.getRoleMapping().forEach(role -> {
                   authorities.add(new SimpleGrantedAuthority(role.getRoleMaster().getProductName()));
               });
               return new UsernamePasswordAuthenticationToken(email ,pwd , authorities);
           } else{
               throw new BadCredentialsException("Invalid Password");
           }
        }else {
            throw new BadCredentialsException("No user registered with this info");
        }

    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
