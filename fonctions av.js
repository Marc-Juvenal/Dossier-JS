fonction formatName(nom) {
    renvoie nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();
  }
  

  fonction applyToArray(tableau, rappel) {
    renvoie array.map(callback);
  }
  

  fonction formatNames(noms) {
    retourner applyToArray(noms, formatName);
  }
  

  const noms = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];
  const nomsFormates = formatNames(noms);
  console.log(nomsFormats);
