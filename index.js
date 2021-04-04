const puppeteer = require('puppeteer');

async function main() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 720});
  await page.goto('https://account.guichet-entreprises.fr/session/new', { waitUntil: 'networkidle0' }); // wait until page load
  
  await page.type('#grpSimpleWidgets-PanelBody > div > div.form-group.field-type-string > div:nth-child(2) > div > div > input', 'samy.mnasri@legalplace.fr');
  await page.type('#grpSimpleWidgets-PanelBody > div > div.form-group.field-type-passwordbase64 > div:nth-child(2) > div > div > div > div > div > div > input', ',aG6Yn_X@KpHnQh');
  // click and wait for navigation
  await Promise.all([
    page.waitForSelector('#btn-record-finish'),
    page.click('#btn-record-finish'),
	page.waitFor(2000),
    page.waitForNavigation({ waitUntil: 'networkidle0' })
	
  ]);
  //  click sur creer un nouveau dossier
  await Promise.all([
	page.waitForSelector('#app-links > li:nth-child(3) > a'),
	page.waitFor(2000),
	page.click('#app-links > li:nth-child(3) > a'),
    page.waitForNavigation({ waitUntil: 'networkidle0' })
	
  ]);
 //  click sur Je souhaite créer mon entreprise individuelle ou ma société

 await Promise.all([
	page.waitForSelector('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(1)'),
	
	page.click('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(1)'),
    // page.waitForSelector('#btn-record-finish'),
	page.click('#btn-record-finish'),
	page.waitForNavigation({ waitUntil: 'networkidle0' })
	
  ]);
       //click sur Je souhaite créer mon entreprise individuelle
	   await Promise.all([
		page.waitForSelector('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div.radiosBox.parsley-success > label > div'),
		page.click('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div.radiosBox.parsley-success > label > div'),
		// page.waitForSelector('#btn-record-finish'),
		page.click('#btn-record-finish'),
		page.waitForNavigation({ waitUntil: 'networkidle0' })
		
	   ]);
	     //click sur Je souhaite exercer une activité libérale
   await Promise.all([
	page.waitForSelector('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(2) > label > div'),
	page.click('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(2) > label > div'),
    // page.waitForSelector('#btn-record-finish'),
	page.click('#btn-record-finish'),
	page.waitForNavigation({ waitUntil: 'networkidle0' })
	
   ]);
 //Souhaitez-vous exercer votre activité libérale sous le régime du micro-entrepreneur ? -- Oui

 await Promise.all([
	page.waitForSelector('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(1) > label > div'),
	// page.waitFor(2000),
	page.click('#content > div > div.row > div.col-md-11 > form > div > div.form-group.field-type-radiosbox > div:nth-child(2) > div > div > div > div:nth-child(1) > label > div'),
	// page.waitForSelector('#btn-record-finish'),
	page.click('#btn-record-finish'),
	page.waitForNavigation({ waitUntil: 'networkidle0' })
	
   ]);

   //Données personnelles -- Etape suivante 
   await Promise.all([
	page.waitForSelector('#btn-record-finish'),
	// page.waitFor(2000),
	page.click('#btn-record-finish'),
	page.waitForSelector('#btn-record-finish'),
	
	page.click('#btn-record-finish'),
	page.waitForNavigation({ waitUntil: 'networkidle0' })
	
   ]);
   //Données personnelles -- Etape suivante 
   await Promise.all([
	page.waitForSelector('#cadre1Identite-PanelBody > div > div.form-group.field-type-boolean > div:nth-child(2) > div > div > label:nth-child(1)'),
	page.click('#cadre1Identite-PanelBody > div > div.form-group.field-type-boolean > div:nth-child(2) > div > div > label:nth-child(1)'),
	//Avez-vous déjà exercé une activité non salariée ? 

	page.click('#cadre1Identite-PanelBody > div > div.form-group.field-type-boolean > div:nth-child(2) > div > div > label:nth-child(2) > input[type=radio]'),
//Civilité : 
	page.click('#cadre1Identite-PanelBody > div > div.form-group.field-type-radios > div:nth-child(2) > div > div > div > label.radio-inline.parsley-success > input[type=radio]'),
//Nom de naissance : 
   page.type('#cadre1Identite-PanelBody > div > div:nth-child(4) > div:nth-child(2) > div > div > input', 'Dupont'),
//Nom d'usage : 
page.type('#cadre1Identite-PanelBody > div > div:nth-child(5) > div:nth-child(2) > div > div > input', ' '),
//Prénom(s) : 
page.type('#cadre1Identite-PanelBody > div > div.repeatable > div > div:nth-child(2) > div:nth-child(2) > div > input', 'Claire'),
page.click('#cadre1Identite-personneLieePPPrenom-0-btn-add'),
page.type('#cadre1Identite-PanelBody > div > div.repeatable > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > input', 'Mathilde'),

//Nationalité : 

page.type('#cadre1Identite-PanelBody > div > div:nth-child(7) > div:nth-child(2) > div > div > input', 'Française'),
//Date de naissance :
page.type('#cadre1Identite-PanelBody > div > div.form-group.field-type-datebirthday > div:nth-child(2) > div > div > div > input', '01/01/1995'),

//Pays de naissance :
page.type('#cadre1Identite-PanelBody > div > div:nth-child(9) > div:nth-child(2) > div > div > div > div > select', 'France'),

//departement de naissance : 
page.type('#cadre1Identite-PanelBody > div > div:nth-child(10) > div:nth-child(2) > div > div > div > div > select', 'Paris'),

//nom de voie :
page.type('#cadre1AdresseDeclarant-PanelBody > div > div:nth-child(4) > div:nth-child(2) > div > div > input', '40 Rue de paradis'),

//Pays :
page.type('#cadre1AdresseDeclarant-PanelBody > div > div:nth-child(7) > div:nth-child(2) > div > div > div > div > select', 'FRANCE'),


// code postal & commune 
page.type('#cadre1AdresseDeclarant-PanelBody > div > div:nth-child(11) > div:nth-child(2) > div > div > input', 'PARIS 10E ARRONDISSEMENT, 75010'),


// suivant 
	page.waitForSelector('#btn-record-next'),
	page.click('#btn-record-next'),
	page.waitForNavigation({ waitUntil: 'networkidle0' })
	
   ]);

		  //ETES  VOUS MARIEE ? 
		  await Promise.all([
			page.waitForSelector('#cadre2Conjoint-PanelBody > div > div:nth-child(1) > div:nth-child(2) > div > div > label:nth-child(2) > input[type=radio]'),
		
			page.click('#cadre2Conjoint-PanelBody > div > div:nth-child(1) > div:nth-child(2) > div > div > label:nth-child(2) > input[type=radio]'),
			page.waitForSelector('#btn-record-next'),
			
			page.click('#btn-record-next'),
			page.waitForNavigation({ waitUntil: 'networkidle0' })
			
		   ]);

						 //Optez-vous pour le statut d'entrepreneur individuel à responsabilité limitée (EIRL) ? -- non

		  await Promise.all([
			page.waitForSelector('<input type="radio" name="cadreEIRL.estEIRL" value="no" data-parsley-required="true" checked="checked" data-parsley-multiple="cadreEIRLestEIRL">'),
		
			page.click('<input type="radio" name="cadreEIRL.estEIRL" value="no" data-parsley-required="true" checked="checked" data-parsley-multiple="cadreEIRLestEIRL">'),
			page.waitForSelector('#btn-record-next'),
			
			page.click('#btn-record-next'),
			page.waitForNavigation({ waitUntil: 'networkidle0' })
			
		   ]);



}

main();


