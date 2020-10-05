# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new appname -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - keyword we use to locate the filepath we want to refer to on a localhost:3000 server.
library - part of the url you name to append to the localhost.
:id - a parameter that is added to the url. The :id is what you pass into a method.
book - the file name that holds the controller.
show - method that is written inside the controller.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

You can generate a new migration by applying $ rails generate migration migration_name. Inside theat migration you can write an add_column command. The syntax for adding a column will be add_column :reference to table, :name of new column, : data type. Once created u call on db:migrate and the schema should update with a new foreign key in the table you assigned it to.




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

Inside of your model Person ruby file, you can create a validation checker by using the keyword validates with the column names and presence set to true. 

validates :shirt, :pants, :shoes, presence: true




6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention with a rails model is in CamelCase. The naming convention for a table is in snake_case.