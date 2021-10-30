db.auth('comp3122', '12345')
db = db.getSiblingDB('polyueats')

db.createCollection('menu');

db.menu.insertOne({'student_id':'33333', 'name':'Alice', 'dept_name':'Comp. Sci.', 'gpa':3.1});
db.menu.insertOne({'student_id':'22222', 'name':'Bob', 'dept_name':'History.', 'gpa':2.0});
db.menu.insertOne({'student_id':'11111', 'name':'Carol', 'dept_name':'History', 'gpa':2.1});

