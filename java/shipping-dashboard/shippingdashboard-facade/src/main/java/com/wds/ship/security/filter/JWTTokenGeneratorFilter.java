package com.wds.ship.security.filter;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.descriptor.web.SecurityConstraint;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;

import static com.wds.ship.constants.OOTConstants.*;

public class JWTTokenGeneratorFilter extends OncePerRequestFilter {

    @Value("${jwt.header.auth}")
    private  String JWTHeader;

    @Value("${jwt.key}")
    private  String JWTKey;

    @Value("${jwt.issuer}")
    private  String JWTIssuer;

    @Value("${jwt.subject}")
    private  String JWTSubject;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(null != authentication) {
            SecretKey key = Keys.hmacShaKeyFor("venkat12345venkadefjfdanmdasndasdvenkadehsinfhidevivaishdasaindhuve".getBytes(StandardCharsets.UTF_8));
            String jwt = Jwts.builder().issuer(JWTIssuer).subject(JWTSubject)
                    .claim(JWT_CLAIMS_USERNAME, authentication.getName())
                    .claim(JWT_CLAIMS_AUTHORITIES, populateAuthorities(authentication.getAuthorities()))
                    .issuedAt(new Date())
                    .expiration(new Date((new Date()) .getTime() + 30000000))
                    .signWith(key)
                    .compact();
            response.setHeader(JWT_HEADER_AUTH , jwt);
        }

        filterChain.doFilter(request , response);
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> collection){
        Set<String> authoritiesSet = new HashSet<>();
        for(GrantedAuthority authority : collection){
            authoritiesSet.add(authority.getAuthority());
        }
        return String.join("," , authoritiesSet);
    }
}
