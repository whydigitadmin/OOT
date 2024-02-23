package com.wds.ship.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {

    registry.addMapping("/api/**")
      .allowedOrigins("https://devphp.shipsoft.co",  "https://18.140.188.121", "http://localhost", "http://localhost:4200")
      .allowCredentials(true).maxAge(3600);

    // Add more mappings...
  }
}
