import readline from 'readline-sync';


let choix;
let page = 1;

do {
    console.log("---MVOLA--- ");
 
    if (page === 1) {
        console.log('1. Acheter Crédit ou Offre Yas');
        console.log('2. Transférer argent');
        console.log('3. MVola Crédit ou Épargne');
        console.log('4. Retrait d\'argent');
        console.log('#. Page suivante');
    } else if (page === 2) {
        console.log('5. Paiement factures & partenaires');
        console.log('6. Mon compte');
        console.log("7. Recevoir de l'argent");
        console.log("8. Banques et micro-finances");
        console.log('*. Page précedente');
    }

    choix = readline.question('Votre choix : ');

    switch (choix) {
        case '1':
            {console.log('--ACHETER OFFRE OU CREDIT YAS--');
            console.log("1. Crédit pour mon numéro");
            console.log("2. Crédit pour autre numéro");
            console.log("3. Offre pour mon numéro");
            console.log("4. Offre pour autre numéro");
            
            let choixAchatCredit = readline.question("Votre choix: ")
            switch (choixAchatCredit) {
                case "1":{
                    console.log("1. Recharger directement");
                    console.log("2. Code recharge");
                    let rechargeCredit = readline.question("Votre Choix: ");
                    switch (rechargeCredit) {
                        case "1":
                            console.log("recharge réussi");
                            break;
                        case "2":
                            console.log("recharge réussi");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                case "2":{
                    console.log("1. Recharger directement");
                    console.log("2. Code recharge");
                    let rechargeAutre = readline.question("Votre Choix: ");
                    switch (rechargeAutre) {
                        case "1":
                            console.log("recharge réussi");
                            break;
                        case "2":
                            console.log("recharge réussi");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                case "3":{
                    console.log("1. MORA");
                    console.log("2. FIRST");
                    console.log("3. YELOW");
                    console.log("4. YAS Net");
                    let offreMvola = readline.question("Votra choix: ")
                    switch (offreMvola) {
                        case "1":
                            console.log("recharge réussi");
                            break;
                        case "2":
                            console.log("recharge réussi");
                            break;
                        case "3":
                            console.log("recharge réussi");
                            break;
                        case "4":
                            console.log("recharge réussi");
                            break
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                case "4":{
                    let numero = readline.question("Entrer le numero: ")
                    if (numero != null) {
                        console.log("Achat de l'offre réussi");
                    }
                    break;}
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '2':
            {console.log('--TRANSFERER ARGENT--');
            let choix2 = readline.question("Entrez le numéro du destinataire: ");
            if (choix2 != null) {
                console.log("Transfert réussi");
            }
            break;}
        case '3':
            {console.log('--MVOLA CREDIT OU EPARGNE--');
            console.log("1. MVola epargne");
            console.log("2. MVola Crédit: ");
            let choix3 = readline.question("Votre choix: ")

            switch (choix3) {
                case "1":{
                    console.log("1. Transfert vers Mvola Epargne");
                    console.log("2. Transfert vers Compte MVola ");
                    console.log("3. Consultation solde");
                    let transfertArgent = readline.question("Votre Choix: ");
                    switch (transfertArgent) {
                        case "1":
                            console.log("transfert  réussi");
                            break;
                        case "2":
                            console.log("transfert réussi");
                            break;
                        case "3":
                            console.log("Votre solde est : ");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;
                    }}
                    break;
                case "2":{
                    console.log("1. Mvola avance");
                    console.log("2. FAMENO");
                    console.log("3. AVANCE MIKASA");
                    let mvolaCredit = readline.question("Votre Choix: ");
                    switch (mvolaCredit) {
                        case "1":
                            console.log("Mvola avance");
                            break;
                        case "2":
                            console.log("Fameno");
                            break;
                        case "3":
                            console.log("Avance mikasa");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '4':
            {console.log('--RETRAIT D"ARGENT--');

            console.log('1. Auprès d\'un agent MVola');
            console.log('2. Auprès D\'un DAB SGM');
            let choix4 = readline.question("Votre choix: ");
            switch (choix4) {
                case "1":{
                    let num = readline.question("Numero agent mvola: ");
                    if (num != null) {
                        console.log("retrait réussi");
                    }
                    break;}
                case "2":{
                    let confirmation = readline.question("Entrer code secret: ")
                    if (confirmation != null) {
                        console.log("retrait réussi");
                    }
                    break;}
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '#':
            page = 2;
            break;
        case '5':
            {console.log('--PAIEMENT FACTURE ET ASSURANCE--');

            console.log('1. YAS OU MOOV');
            console.log('2. Assurances');
            let choix5 = readline.question('Votre choix: ')
            switch (choix5) {
                case '1':{
                    console.log("1. Facture PostPayee Fixe & Mobile");
                    console.log("2. Facture PostPayee Moov");
                    console.log("3. Precommande Mobile");
                    let yas = readline.question("Votre Choix: ");
                    switch (yas) {
                        case "1":
                            console.log("Bienvenue dans Facture PostPayee Fixe & Mobile");
                            break;
                        case "2":
                            console.log("bienvenue dans Facture PostPayee Moov");
                            break;
                        case "3":
                            console.log("Bienvenue dans Precommande Mobile");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                case "2":{
                    console.log("1. MVOLA ASSURE");
                    console.log("2. TOMADY");
                    console.log("3. ALLIANZ");
                    console.log("4. SANLAM");
                    console.log("5. ARO");
                    console.log("6. NY HAVANA");
                    let assurance = readline.question("Votre Choix: ");
                    switch (assurance) {
                        case "1":
                            console.log("Bienvenue dans Mvola assure");
                            break;
                        case "2":
                            console.log("Bienvenue dans tomady");
                            break;
                        case "3":
                            console.log("Bienvenue dans allianz");
                            break;
                        case "4":
                            console.log("Bienvenue dans sanlam");
                            break;
                        case "5":
                            console.log("Bienvenue dans aro");
                            break;
                        case "6":
                            console.log("Bienvenue dans ny havana");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '6':
            {console.log('--MON COMPTE--');

            console.log('1. Consultation de solde');
            console.log("2. Mon repertoire MVola");
            let choix6 = readline.question('Votre choix: ')
            switch (choix6) {
                case '1':{
                    let code = readline.question("Entrer votre code: ");
                    if (code != null) {
                        console.log("Votre solde est : ");
                    }
                    break;}
                case "2":{
                    console.log("1. Ajouter un contact");
                    console.log("2. Consulter un contact");
                    console.log("3. Supprimer un contact");
                    let contactMvola = readline.question("Votre choix: ");
                    switch (contactMvola) {
                        case "1":
                            console.log("contact ajouté");
                            break;
                        case "2":
                            console.log("Votre contact");
                            break;
                        case "3":
                            console.log("contact supprimé");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '7':
            {console.log('--RECEVOIR DE L"ARGENT--');

            console.log('1. MVola Epargne');
            console.log("2. Western Union");
            let choix7 = readline.question('Votre choix: ')
            switch (choix7) {
                case '1':{
                    let codeMvola = readline.question("Code secret MVola: ");
                    if (codeMvola != null) {
                        console.log("Argent reçu");
                    }
                    break;}
                case "2":{
                    console.log("1. Code de transfert WU");
                    console.log("2. Mon identite enregistre Mvola");
                    let westernUnion = readline.question("Votre choix: ");
                    switch (westernUnion) {
                        case "1":
                            console.log("Transfert réussi");
                            break;
                        case "2":
                            console.log("Votre identité MVola");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;}
                    }
                    break;
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '8':
            {console.log('--BANQUES ET MICRO-FINANCES--');

            console.log("1. Ma banque");
            console.log("2. Mon Institution de Micro-Finances");
            let choix8 = readline.question("Votre choix: ");
            switch (choix8) {
                case '1':{
                    console.log("1. SG MADA");
                    console.log("2. BNI");
                    console.log("3. BOA");
                    console.log("4. SIPEM BANQUE");
                    console.log("5. BMOI");
                    console.log("6. BAOBAB");
                    console.log("7. MCB");
                    let banque = readline.question("Votre Choix: ");
                    switch (banque) {
                        case "1":
                            console.log("Bienvenue dans SG MADA");
                            break;
                        case "2":
                            console.log("Bienvenue dans BNI");
                            break;
                        case "3":
                            console.log("Bienvenue dans BOA");
                            break;
                        case "4":
                            console.log("Bienvenue dans SIPEM BANQUE");
                            break;
                        case "5":
                            console.log("Bienvenue dans BMOI");
                            break;
                        case "6":
                            console.log("Bienvenue dans BAOBAB");
                            break;
                        case "7":
                            console.log("Bienvenue dans nMCB");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;
                    }
                    break;}
                case "2":
                    {console.log("1. KRED");
                    console.log("2. PAMF");
                    console.log("3. IFRA");
                    let microFinance = readline.question("Votre Choix:");
                    switch (microFinance) {
                        case "1":
                            console.log("Bienvenue dans KRED");
                            break;
                        case "2":
                            console.log("Bienvenue dans PAMF");
                            break;
                        case "3":
                            console.log("Bienvenue dans IFRA");
                            break;
                        default:
                            console.log("Choix invalide");
                            break;
                    }
                    break;}
                default:
                    console.log("Choix invalide");
                    break;
            }
            break;}
        case '*':
            page = 1;
            break;
        default:
            console.log('Choix invalide.');
    }

} while (choix !== 'exit');
    