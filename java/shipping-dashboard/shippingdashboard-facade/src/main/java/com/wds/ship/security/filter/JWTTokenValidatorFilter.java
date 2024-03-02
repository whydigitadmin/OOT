package com.wds.ship.security.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import static com.wds.ship.constants.OOTConstants.*;

public class JWTTokenValidatorFilter extends OncePerRequestFilter {

    @Value("${jwt.header.auth}")
    private  String JWTHeader;

    @Value("${jwt.key}")
    private  String JWTKey;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (isFirstTime(request)) {
            filterChain.doFilter(request, response);
            return;
        }

        String jwt = request.getHeader(JWT_HEADER_AUTH);
        if(null != jwt){
            SecretKey key = Keys.hmacShaKeyFor("venkat12345venkadefjfdanmdasndasdvenkadehsinfhidevivaishdasaindhuve".getBytes(StandardCharsets.UTF_8));
            Claims claims = Jwts.parser()
                    .verifyWith(key)
                    .build()
                    . parseSignedClaims(jwt)
                    .getPayload();

                    String username = String.valueOf(claims.get(JWT_CLAIMS_USERNAME));
                    String authorities =(String) claims.get(JWT_CLAIMS_AUTHORITIES);

                    Authentication auth = new UsernamePasswordAuthenticationToken(username ,null, AuthorityUtils.commaSeparatedStringToAuthorityList(authorities) );
            SecurityContextHolder.getContext().setAuthentication(auth);

        }
        filterChain.doFilter(request, response);
    }

    private boolean isFirstTime(HttpServletRequest request) {
        // Check if it's a login endpoint or an OPTIONS request
        String path = request.getServletPath();
        return JWT_URL_SKIP.equals(path) || HttpMethod.OPTIONS.matches(request.getMethod());
    }
}
