app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, password],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('User added');
      }
    );
  });
  app.post('/sign in', (req, res) => {
    const { username, email, password } = req.body;
    pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, password],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send('User added');
      }
    );
  });