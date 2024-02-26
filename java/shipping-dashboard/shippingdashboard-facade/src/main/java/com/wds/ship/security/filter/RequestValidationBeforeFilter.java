package com.wds.ship.security.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class RequestValidationBeforeFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        String header = request.getHeader("Authorization");
        if(null != header) {
            header = header.trim();
            if(StringUtils.startsWithIgnoreCase(header , "Basic")){

                byte[] base64Token = header.substring(6).getBytes(StandardCharsets.UTF_8);
                byte[] decoded;
                try{
                    decoded = Base64.getDecoder().decode(base64Token);
                    String token = new String(decoded , StandardCharsets.UTF_8);
                    int delim = token.indexOf(":");
                    if(delim == -1){
                        throw new BadCredentialsException("Invalid basic authentication token");

                    }
                    String email = token.substring(0 , delim);
                }catch(IllegalArgumentException e){
                    throw new BadCredentialsException("Failed to decode");
                }
            }
        }
        filterChain.doFilter(request,response);
    }


}
