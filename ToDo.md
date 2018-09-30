# ToDo

## Issues
- single-page app at home#index using ReactJS
  - show SHARED_WITH on each List
  - add "key" and fix other client-side console warnings
  - allow Task.done checkbox to be modified without first hitting the Edit button
  - implement new Task/List in React using a form?
  - should JS fetch My Lists or keep having Controller pass it?

## TODO

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
