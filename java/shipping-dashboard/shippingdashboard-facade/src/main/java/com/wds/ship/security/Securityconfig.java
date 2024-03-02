package com.wds.ship.security;

import com.wds.ship.security.entity.User;
import com.wds.ship.security.filter.JWTTokenGeneratorFilter;
import com.wds.ship.security.filter.JWTTokenValidatorFilter;
import com.wds.ship.security.filter.RequestValidationBeforeFilter;
import com.wds.ship.security.repository.AuthRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

import static com.wds.ship.constants.OOTConstants.JWT_HEADER_AUTH;

@Configuration
@EnableWebSecurity
public class Securityconfig {

    @Value("${jwt.header.auth}")
    private  String JWTHeader;

    @Value("${jwt.key}")
    private  String JWTKey;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .sessionManagement( session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .cors().configurationSource(new CorsConfigurationSource() {
            @Override
            public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOrigins(Arrays.asList("https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200","https://os.onlinetracking.co"));
                config.setAllowedMethods(Collections.singletonList("*"));
                config.setAllowCredentials(true);
                config.setAllowedHeaders(Collections.singletonList("*"));
                config.setExposedHeaders(Arrays.asList(JWT_HEADER_AUTH));
                config.setMaxAge(360L);
                return config;
            }
        }).and()
                .csrf().disable()
                .addFilterBefore(new RequestValidationBeforeFilter() , BasicAuthenticationFilter.class)
                .addFilterAfter(new JWTTokenGeneratorFilter(), BasicAuthenticationFilter.class)
                .addFilterBefore(new JWTTokenValidatorFilter() , BasicAuthenticationFilter.class)
                .authorizeHttpRequests(request -> {
                   // request.anyRequest().permitAll();
                    request.anyRequest().authenticated();
                }).formLogin(Customizer.withDefaults())
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
