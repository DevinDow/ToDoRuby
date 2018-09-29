# ToDo

## Issues

## TODO

- if no Lists then put some text: "Please create a new List to get started" or create User should add initial List to DB?
- Owners
  - Share adds to Owner
    - list users?  or send email?
  - Delete removes from Owners
    - if there are no other owners then destroy List
    - protect non-owner Lists & their Tasks
  - change List Name updates Owner when more than one Owner, or Name propogated to Owner?
- Users
  - show user.name in 
  - password reset?
- Views
  - single-page app at home#index
    - editable **Task**
      - use ReactJS
      - use [AJAX](https://docs.google.com/document/d/1wDGbrMNZcC9fNPRmIvftnUF0gO9Ref1QsbdODm0KF-Y/edit#) for modifying/adding a Task
      - https://m.patrikonrails.com/do-you-really-need-that-fancy-javascript-framework-e6f2531f8a38
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**

## Consider

- Heroku
  - DB: ephemeral vs AWS S3
