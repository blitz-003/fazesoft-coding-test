SELECT u.created_at AS registration_year, 
       u.id as user_id, u.name as name,
       FROM users u JOIN orders o
       ON u.id = o.user_id
       WHERE order.status = 'completed'
       GROUP BY o.registration_year
       HAVING COUNT(o.id)