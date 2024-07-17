package com.example.gestionFormation.Config;

import com.example.gestionFormation.Repository.FormateurRepository;
import com.example.gestionFormation.entity.Formateur;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FormateurConfig {
  @Bean
   CommandLineRunner commandLineRunner (
           FormateurRepository repository
  ){
       return args ->{
          Formateur aziz= new Formateur(
                   1L,
                   "aziz",
                   "mohamedaziz.rebhi@ensi-uma.tn",
                   92048665
           );
           Formateur ahmed= new Formateur(
                   2L,
                   "ahmed",
                   "ahmed.rebhi@ensi-uma.tn",
                   93048665
           );
           repository.saveAll(
                   List.of(aziz,ahmed)
           );

       };
   }
}
