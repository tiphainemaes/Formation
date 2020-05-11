--14. Supprimer toutes les commandes (et les lignes des commandes) inférieur au 
--1er février 2019. Cela doit être effectué en 2 requêtes maximum

SELECT nom, COUNT(nom) AS nombre_produit, 
FROM commande_ligne
GROUP BY nom
HAVING COUNT(nom) > 1
ORDER BY nombre_produit DESC;


SELECT * FROM client;
SELECT * FROM commande;
SELECT * FROM commande_ligne;



