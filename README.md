# Lancement du projet

Pour pouvoir lancer ce projet en local et remplacer avec vos propres informations, voici quelques instructions:

## 1. Cloner le projet
Pour cette étape, placez-vous dans votre répertoire de travail, ouvrez l'invite de commande et tapez les commandes suivantes:
```shell
git clone https://github.com/brelnosse/portofolio.git
cd portofolio
```

## 2. Installer les dépendances:
Une fois dans le dossier du projet, il vous faut télécharger les dépendances du projet avant de pouvoir le démarrer. Pour cela, dans l'invite de commande, tapez la commande suivante à la racine du projet (`portofolio/`):
```shell
npm install # Ce script va installer toutes les dépendances présentes dans le fichier `portofolio/package.json` 
```
#### **Félicitations le projet est prêt à être lancé **
Prochaine étape: Lancement de l'application.

### 3. Configurer les variable d'environnement pour l'envoi de mail:

Pour les emails, le services utilisé est email. Pour utiliser ce service, créer un fichier .env à la racine du projet et remplissé ces variables avec vos clés:
```shell
REACT_APP_EMAILJS_SERVICE=
REACT_APP_EMAILJS_TEMPLATE=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

## 4. Lancement de l'application:
Dans le projet, ouvrez l'invite de commande et tapez la commande: 
```shell
npm start
```
> L'application se lance et une url de la forme `http://localhost:3000` vous est fournie; c'est la que vous pouvez visualiser l'application; copiez cette url et collez la dans le navigateur si celui ne s'est pas ouvert automatiquement.

# Modification des informations

Pour modifier les informations, il faut vous rendre dans le dossier:
```tree
portofolio/
    src/
    |__ data/
```

**Bonne utilisation 😄**