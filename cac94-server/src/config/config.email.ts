
export class ConfigMailer {
static email_auto = "ne_pas_repondre@sstr.fr";
static admin_adress = './../../'+process.env.SMTP;
static forgoPassLink = "http://localhost:4200/?id=@id&key=@key";
static homeLink = "http://localhost:4200/";

static PATTERN = {
  EMAIL : "@email",
  FROM : "@from",
  TO : "@to",
  ID : "@id",
  KEY : "@key",
  LINK : "@link",
  NAME : "@name",
  PRENOM : "@prenom",
  MESSAGE : "@message",
  ENTREPRISE : "@entreprise",
  FONCTION : "@fonction",
  TELEPHONE : "@telephone"
}

static message_validadmin:string = "<p>Le compte de l'utilisateur a été validé avec succès.</p>";
static message_validemail:string = "<p><b>Validé</b><br>Votre adresse email a bien été validé<br/></b><br>Votre compte est maintenant en attente de validation de la part de l'administrateur, cela peut prendre jusqu'à 72h. Merci de votre compréhension, à bientôt.<br/></p>";


static email_user_fogot_pass = {
    from: '"SSTR" <@email>',
    to: "@to",
    subject:"Oubli de mot de passe",
    html:"<b><p>Bonjour,</p> <p>Pour pouvoir changer de mot de passe, veuillez cliquer sur le lien suivant</p><a href='@link'>@link</a> <p>Cordialement</p><p>Merci! </p></b>"
  }

  static user_account_validate = {
      from: '"SSTR" <@email>',
      to:"@to",
      subject:"Validation de votre compte utilisateur",
      html: "<p>Votre compte utilisateur est maintenant validé. Vous pouvez dès à présent vous connecter via le lien ci-dessous et utiliser les services.</br><br><a href='@link'>@link</a></br> Merci de votre confiance. A très bientôt.</br></p>"
}


  static send_user_email = {
      from: '"SSTR" <@email>',
      to: "@to",
      subject:"Inscription",
      html:"<b><p>Bonjour,</p> <p>Votre inscription est en attente de validation. Un email vous sera envoyé dès validation de votre inscription. </p> <p>Cordialement</p><p>Merci! </p></b>"
    }

static send_admin_email = {
  from: '"SSTR" <@email>',
  to: "@to",
  subject:"Demande à traiter",
  html: "<b><p>Informations nouvel utilisateur :<br><ul> <li>Prenom: @prenom</li> <li>Nom: @name</li> <li>Téléphone: @telephone</li>  </ul><br/><br>Configurer les droits d’accès à partir du lien ci-après : <b>http://localhost:4200/user/</br>"
}

}
