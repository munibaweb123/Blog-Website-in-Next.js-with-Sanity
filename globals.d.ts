declare global {
    var commentsDB: { id: string; name: string; comment: string }[]; // Define the type for commentsDB
  }
  
  export {}; // This is necessary to make the file a module
  