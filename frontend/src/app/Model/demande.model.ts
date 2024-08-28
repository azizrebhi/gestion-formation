export interface Demande {
   id:number ;
    title: string;
    team: string;
    startDate: string; // or Date, depending on your preference
    endDate: string; // or Date, depending on your preference
    online: boolean;
    presentiel: boolean;
    selectedCourseId: number;
    selectedLanguages: number[];
    selectedFormateurId: number;
}
