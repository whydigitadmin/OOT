//package com.wds.ship.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class Securityconfig {
//
////    @Bean
////    SecurityFilterChain flterChain(HttpSecurity httpSecurity) throws Exception{
////
////        httpSecurity.csrf().
////                disable()
////                .authorizeRequests()
////                .antMatchers(HttpMethod.OPTIONS, "/**")
////                .permitAll()
////                .anyRequest()
////                .authenticated()
////                .and()
////                .httpBasic();
////
////
////        httpSecurity
////                .authorizeRequests()
////                .requestMatchers("/api/v1/facade/user/**").permitAll()
////                .anyRequest().authenticated()
////                .and()
////                .formLogin()
////                .loginPage("/login")
////                .defaultSuccessUrl("/dashboard")
////                .permitAll()
////                .and()
////                .logout()
////                .permitAll();
////
////        return httpSecurity.build();
////    }
//
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
////                .authorizeHttpRequests(requests -> requests
////                        .requestMatchers("/dashboard").hasAnyRole("6","17", "34", "65")
////                        .requestMatchers("/api/v1/**").hasAnyRole("6","17", "34", "65")
////
////                )
//                .formLogin(form -> form
//                        .loginPage("/login")
//                        .permitAll()
//                )
//                .logout(logout -> logout
//                        .permitAll());
//
//        return http.build();
//    }
//
//
//    @Bean
//    BCryptPasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//
//
//
//}
