export class UserDtoModel {
    // Propriété pour le nom d'utilisateur
    username: string;
  
    // Propriété pour l'email
    email: string;
  
    // Propriété pour le chemin ou nom de l'image de profil
   // profileImage: string;
  
    // Constructeur pour initialiser les propriétés
    constructor(username: string, email: string, profileImage: string) {
      this.username = username;
      this.email = email;
      //this.profileImage = profileImage;
    }
  }
  