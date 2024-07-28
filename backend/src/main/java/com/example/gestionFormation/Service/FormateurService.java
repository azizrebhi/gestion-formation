package com.example.gestionFormation.Service;

import com.example.gestionFormation.Repository.FormateurRepository;
import com.example.gestionFormation.entity.Formateur;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class FormateurService {
    private final FormateurRepository formateurRepository;
    @Autowired
    public FormateurService(FormateurRepository formateurRepository ){
        this.formateurRepository=formateurRepository;
    }
public List<Formateur> getFormateur(){

    return formateurRepository.findAll();
}
    public void addNewformateur(Formateur formateur){
       Optional<Formateur> formateurOptional =formateurRepository.findFormateurByemail(formateur.getEmail());
        if(formateurOptional.isPresent()){
            throw new IllegalStateException("email taken");
        }
        formateurRepository.save(formateur);

    }

    public void deleteFormateur(Long formateurId) {
boolean exists=formateurRepository.existsById(formateurId);
   if(!exists){
       throw new IllegalStateException(
               "studentwithid"+formateurId+"does not exist");
   }formateurRepository.deleteById(formateurId);
    }
@Transactional
    public void updateformateur(Formateur formateur) {
  Formateur updatedFormateur=formateurRepository.findById(formateur.getId())
                  .orElseThrow(()->new IllegalStateException("formateur with id "+formateur.getId()+" does not exist"));
    if (formateur.getName() !=null && formateur.getName().length() >0 && !Objects.equals(updatedFormateur.getName(),formateur.getName())){
        updatedFormateur.setName(formateur.getName());}
    if (formateur.getEmail() !=null && formateur.getEmail().length() >0 && !Objects.equals(updatedFormateur.getEmail(),formateur.getEmail())){
      Optional <Formateur> formateurOptional = formateurRepository.findFormateurByemail(formateur.getEmail());
        if(formateurOptional.isPresent()){
            throw new IllegalStateException("email taken");}
        updatedFormateur.setEmail(formateur.getEmail());
        updatedFormateur.setTel(formateur.getTel());
    }

}
}
