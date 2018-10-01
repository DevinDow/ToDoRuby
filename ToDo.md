# ToDo

## Issues
- single-page app at home#index using ReactJS
  - show SHARED_WITH on each List
  - fix client-side console warnings
  - allow Task.done checkbox to be modified without first hitting the Edit button
  - implement new Task/List in React using a form?

## TODO

- Sort Lists
  - if list's name only comes from Owner table then can easily sort in user.rb: 
    - has_many :owners, dependent: :destroy, -> { order(:my_list_name)}
    - lists#create() needs to set name when creating owner
    - edit list will need to join owner table?
- Owners
  - Share adds to Owner
    - list users?  or send email?
  - Delete removes from Owners
    - if there are no other owners then destroy List
    - protect non-owner Lists & their Tasks
  - change List Name updates Owner when more than one Owner, or Name propogated to Owner?
- Users
  - password reset?
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
  - button on List to delete all Tasks that are done

## Consider

- Heroku
  - DB: ephemeral vs AWS S3
