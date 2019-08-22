//Bewertung
inputBewertung1.onblur = function() {
  var n = document.getElementById("inputBewertung1").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>100 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 100';
  }
};

inputBewertung1.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};
inputBewertung2.onblur = function() {
  var n = document.getElementById("inputBewertung2").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>100 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 100';
  }
};

inputBewertung2.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};
inputBewertung3.onblur = function() {
  var n = document.getElementById("inputBewertung3").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>100 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 100';
  }
};

inputBewertung3.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};

//Angaben
angabenInput1.onblur = function() {
  var n = document.getElementById("angabenInput1").value;
  var m = document.getElementById("angabenInput1").value.length;
  //var n = Number(n);
  //alert (m);
  if (n<0 || m<4 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'format of year yyyy';
  }
};

angabenInput1.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};
angabenInput4.onblur = function() {
  var n = document.getElementById("angabenInput4").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0<';
  }
};

angabenInput4.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};
angabenInput7.onblur = function() {
  var n = document.getElementById("angabenInput7").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0<';
  }
};

angabenInput7.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};



//anwenbug
anwenbugInput2.onblur = function() {
  var n = document.getElementById("anwenbugInput2").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>15 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 15';
  }
};
anwenbugInput2.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput3.onblur = function() {
  var n = document.getElementById("anwenbugInput3").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>8 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 8';
  }
};
anwenbugInput3.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput4.onblur = function() {
  var n = document.getElementById("anwenbugInput4").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>5 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 5';
  }
};
anwenbugInput4.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput5.onblur = function() {
  var n = document.getElementById("anwenbugInput5").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n!=5 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0/5';
  }
};
anwenbugInput5.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput6.onblur = function() {
  var n = document.getElementById("anwenbugInput6").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n!=5 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0/5';
  }
};
anwenbugInput6.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput8.onblur = function() {
  var n = document.getElementById("anwenbugInput8").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput8.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput9.onblur = function() {
  var n = document.getElementById("anwenbugInput9").value;
  //var n = Number(n);
  //alert (m);
  if (n!=5 ||  n!=7 || n!=9 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '5/7/9';
  }
};
anwenbugInput9.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput10.onblur = function() {
  var n = document.getElementById("anwenbugInput10").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 ||  n!=2 || n!=4 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0/2/4';
  }
};
anwenbugInput10.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput11.onblur = function() {
  var n = document.getElementById("anwenbugInput11").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput11.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput14.onblur = function() {
  var n = document.getElementById("anwenbugInput14").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 ||  n!=3 || n!=7 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0/3/7';
  }
};
anwenbugInput14.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput16.onblur = function() {
  var n = document.getElementById("anwenbugInput16").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput16.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput17.onblur = function() {
  var n = document.getElementById("anwenbugInput17").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>5 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 5';
  }
};
anwenbugInput17.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput18.onblur = function() {
  var n = document.getElementById("anwenbugInput18").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>5 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 5';
  }
};
anwenbugInput18.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput19.onblur = function() {
  var n = document.getElementById("anwenbugInput19").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'only 0';
  }
};
anwenbugInput19.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput20.onblur = function() {
  var n = document.getElementById("anwenbugInput20").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'only 0';
  }
};
anwenbugInput20.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput21.onblur = function() {
  var n = document.getElementById("anwenbugInput21").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>20 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 20';
  }
};
anwenbugInput21.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput22.onblur = function() {
  var n = document.getElementById("anwenbugInput22").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput22.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput23.onblur = function() {
  var n = document.getElementById("anwenbugInput23").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'only 0';
  }
};
anwenbugInput23.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput24.onblur = function() {
  var n = document.getElementById("anwenbugInput24").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'only 0';
  }
};
anwenbugInput24.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput28.onblur = function() {
  var n = document.getElementById("anwenbugInput28").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>15 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput28.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput29.onblur = function() {
  var n = document.getElementById("anwenbugInput29").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput29.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput30.onblur = function() {
  var n = document.getElementById("anwenbugInput30").value;
  //var n = Number(n);
  //alert (m);
  if (n!=6 || n!=8 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '6/8';
  }
};
anwenbugInput30.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput31.onblur = function() {
  var n = document.getElementById("anwenbugInput31").value;
  //var n = Number(n);
  //alert (m);
  if (n!=2 || n!=4 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '2/4';
  }
};
anwenbugInput31.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput32.onblur = function() {
  var n = document.getElementById("anwenbugInput32").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n!=2 || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0/2';
  }
};
anwenbugInput32.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput34.onblur = function() {
  var n = document.getElementById("anwenbugInput34").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>15 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 15';
  }
};
anwenbugInput34.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput35.onblur = function() {
  var n = document.getElementById("anwenbugInput35").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>3 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 3';
  }
};
anwenbugInput35.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput36.onblur = function() {
  var n = document.getElementById("anwenbugInput36").value;
  //var n = Number(n);
  //alert (m);
  if (n!=0 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = 'only 0';
  }
};
anwenbugInput36.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


anwenbugInput37.onblur = function() {
  var n = document.getElementById("anwenbugInput37").value;
  //var n = Number(n);
  //alert (m);
  if (n<0 || n>10 || n=='' || isNaN(n)) { // не email
    this.classList.add('invalid');
    this.value = '0 bis 10';
  }
};
anwenbugInput37.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.value = '';
  }
};


