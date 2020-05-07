-- 4. Enregistrer le prix total à l’intérieur de chaque ligne des commandes, en fonction du prix unitaire et 
-- de la quantité.

UPDATE commande_ligne 
SET prix_total = SUM(prix_unitaire)
WHERE commande_id

SELECT nom, COUNT(nom) AS nombre_produit, commande_id
FROM commande_ligne
GROUP BY nom, commande_id
HAVING COUNT(nom) > 1
ORDER BY nombre_produit DESC;


SELECT * FROM client;
SELECT * FROM commande;
SELECT * FROM commande_ligne;
