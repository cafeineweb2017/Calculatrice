
/**inp : réprésente notre écran de calculatrice**/
var inp=document.querySelector('input[type="text"]');

/******************************************************************************
*Le tableau code_chiffre contient les codes ASCII des touches de notre clavier
*49-57 : correspond dans cet ordre au nombre 0 à 9
*42-48 : correspond au touche du pavé alpha-num pour add, multi, soustr et division
*13 : correspond à la touche entrée pour valider
******************************************************************************/

var code_chiffre=[13,42,43,45,46,47,48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
var reset_key=114, eval_key=13;

alert("***********************************************************\n"
    +"***  Appuyez sur la touche \"R\" pour néttoyer l'écran  ***\n"
    +"************************************************************");

/************************************
*   GESTIONNAIRE D'EVENEMENT LIE A LA PRESSION SUR LE CLAVIER ALPHA NUMERIQUE
***********************************/
document.addEventListener('keypress', function(e) {
        
        /*Si l'on appuie sur la touche "R"
        alors on efface le contenu de l'écran.*/
        if(e.keyCode==reset_key)
        {
            inp.value="";
        }else
        {
            /**Si on appuie sur une touche du pavé numérique**/
            if(code_chiffre.indexOf(e.keyCode)!=-1)
            {
                /**Si il s'agit de la touche "Entrée" alors on évalue l'expression**/
                if(e.keyCode==eval_key)
                {
                    evaluate();
                }
                else{
                    /**Sinon on affiche le caractère correspondant à la touche sur l'écran**/
                    updateScreen(String.fromCharCode(e.keyCode));
                }
            }
        }

});


/**********************************************
*   GESTIONNAIRE LIE AU CLIC SUR UN BOUTON DU CLAVIER
**************************************************/
function affiche(btn){
	var val=btn.value;
    
    /**Si l'on appui sur la touche "égale", on évalue l'expression**/
	if(val=="=")
	{
        evaluate();
	}else
	{
        /**sinon on l'affiche à l'écran**/
        updateScreen(val);
	}
}

/**Fonctions d'évaluation de l'expression entrée par l'utilisateur**/
function evaluate()
{
    try{
        inp.value=eval(inp.value);
    }catch(e){
        /**En cas d'erreur dans la chaine entrée, ....**/
        inp.value="Syntax Error";
    }
}


/**Fonctions pour mettre à jour l'affichage de l'écran**/
function updateScreen(val)
{
    var ch=inp.value;
    ch+=val;
    inp.value=ch;
}





