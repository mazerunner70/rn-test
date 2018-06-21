var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/provisioner.db');
db.serialize(function() {
  db.run("DROP TABLE IF EXISTS dependency");
  db.run(`CREATE TABLE dependency (
                                    name TEXT PRIMARY KEY, 
                                    curr_ver NUMERIC, 
                                    last_update TEXT, 
                                    new_ver NUMERIC, 
                                    last_check TEXT)`);
});
db.close();
