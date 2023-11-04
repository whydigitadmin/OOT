//package com.wds.ship.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class Securityconfig {
//
//    @Bean
//    SecurityFilterChain flterChain(HttpSecurity httpSecurity) throws Exception{
//
//
//        httpSecurity.authorizeHttpRequests()
//                .requestMatchers("/api/v1/user/**")
//                .hasAuthority("ADMIN")
//                .anyRequest()
//                .authenticated()
//                .and()
//                .csrf().disable()
//                .httpBasic();
//
//        // Working Code
////        httpSecurity.authorizeHttpRequests()
////                .requestMatchers("/api/v1/user/**")
////                .permitAll()
////                .anyRequest()
////                .authenticated()
////                .and()
////                .csrf().disable()
////                .httpBasic();
//
//
//        return httpSecurity.build();
//    }
//
//    @Bean
//    BCryptPasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//
//
//    // InMemory Auth
////    @Bean
////    SecurityFilterChain flterChain(HttpSecurity http) throws Exception{
////        http.httpBasic();
////        http.authorizeHttpRequests().anyRequest().authenticated();
////        return http.build();
////    }
////
////    @Bean
////    BCryptPasswordEncoder passwordEncoder(){
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    UserDetailsService userDetailsService(){
////        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
////       UserDetails user =  User.withUsername("Tom").password(passwordEncoder().encode("cruise")).authorities("read").build();
////         manager.createUser(user);
////         return manager;
////
////    }
//}
