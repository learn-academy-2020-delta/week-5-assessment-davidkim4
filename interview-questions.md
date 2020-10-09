# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model-view-controller and is a framework ruby developers use to create their code.

  Researched answer: MVC is a framework short for models(for handling data and business logic), controller(for handling the user interface and application), and view(for handling graphical user interface objects and presentation). It also provides default code and structures for a database, a web service, and web pages. 



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: I believe CRUD is a framework to make a working application and stands for create, read, update, and delete.

  Researched answer: The CRUD framework/paradigm is common in constructing web application because it helps developers remember how to create full usable models or APIs.



3. What is a migration? Why would you use one?

  Your answer: A migration is used to implement new models into your database or to implement new actions into your models after they've been created.

  Researched answer: Migrations are used to modify the shape of an existing database. It updates the schema based on what you pass. The schema cannot be edited directly and must use a migration for any changes.  



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: The model Person will have a name column to distinguish each individual a little more descriptively and a job column to determine what kind of work they would do and if they need a computer to use. The model Computer will have a brand, purpose, time used, and mobility(desktop/laptop) column. Depending on the persons job, the computer instance may have higher processing power or a particular brand more focused on a certain task. The model Person will have the foreign key because each instance of a computer will be owned by a person.

  Researched answer: Person will have the has_many association in its ruby file that indicates that it can have many computers, while Computer will have the belongs_to association to indicate that computers belong to a person.



5. What is object-relational mapping?

  Your answer: I think it allows developers to use code from a database language and object oriented language together? Not too sure but will check later to get the full details!

  Researched answer: ORM is a programming technique for converting data between incompatible systems using object-oriented programming languages. Such as using SQL queries in Rails.



6. What is a gem?

  Your answer: A downloadable API for Ruby on Rails.

  Researched answer: A Ruby open source library that developers can download into their text editor to reuse functions from other developers. 



7. Why is it important to have validations in your application?

  Your answer: Having validations in your applications is important because it checks and makes sure the right data types are typed in when they are needed. If there are no validations, it is hard to see any if the code is working as intended.

  Researched answer: Validation will ensure any data entered by the user is valid and will prevent bugs creeping in due to invalid data.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: a route that provides maping between HTTP verbs (get, post, put, delet, patch) to controller CRUD actions. You do not need to indicate which url page holds which functionality.
- JSON: JavaScript Object Notation, a lightweight format to store and transport data. Usually between server and client to display data on a web page.
- API: Packages of code that hold functions and instructions allowing two applications to talk to each other and request data from their servers. 
- Endpoints: The point where two applications communicate with each other and where the requested data is stored.
- Strong params: Whitelists certain parameters and cannot change those params once initialized.
