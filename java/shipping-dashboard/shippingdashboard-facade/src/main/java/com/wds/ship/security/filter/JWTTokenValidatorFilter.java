package com.wds.ship.security.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class JWTTokenValidatorFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (isFirstTime(request)) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = request.getHeader("Authorization");
        if(null != jwt){
            SecretKey key = Keys.hmacShaKeyFor("venkat12345venkadefjfdanmdasndasdvenkadehsinfhidevivaishdasaindhuve".getBytes(StandardCharsets.UTF_8));
            Claims claims = Jwts.parser()
                    .verifyWith(key)
                    .build()
                    . parseSignedClaims(jwt)
                    .getPayload();

                    String username = String.valueOf(claims.get("username"));
                    String authorities =(String) claims.get("authorities");

                    Authentication auth = new UsernamePasswordAuthenticationToken(username ,null, AuthorityUtils.commaSeparatedStringToAuthorityList(authorities) );
            SecurityContextHolder.getContext().setAuthentication(auth);

        }
        filterChain.doFilter(request, response);
    }

    private boolean isFirstTime(HttpServletRequest request) {
        // Check if it's a login endpoint or an OPTIONS request
        String path = request.getServletPath();
        return "/api/v1/facade/user/loginInfo1".equals(path) || HttpMethod.OPTIONS.matches(request.getMethod());
    }
}
