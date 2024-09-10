export interface Task {
   
      id?: number;
      title: string;
      status: 'TODO' | 'IN_PROGRESS' | 'DONE';
      startDate: Date;  // Changed from Date to string for consistency with form input type
      endDate: Date;    // Changed from Date to string for consistency with form input type
      mode: 'Presentiel' | 'EnLigne';
      team: string;
  }
  