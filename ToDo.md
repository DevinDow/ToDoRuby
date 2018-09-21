# ToDo

## Issues

- running posgresql locally

## TODO

- if no Lists then put some text: "Please create a new List to get started" or create User should add a DB?
- Owners
  - Share adds to Owner
    - list users?  or send email?
  - Delete removes from Owners
    - if there are no other owners then destroy List
    - protect non-owner Lists & their Tasks
  - change List Name updates Owner when more than one Owner, or Name propogated to Owner?
- Users
  - password reset?
- Views
  - single-page app?
    - editable **Task** with "+" button to update & refresh
      - use [AJAX](https://docs.google.com/document/d/1wDGbrMNZcC9fNPRmIvftnUF0gO9Ref1QsbdODm0KF-Y/edit#) for modifying/adding a Task
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
- Tests
  - [Rails Guides on Testing](https://guides.rubyonrails.org/testing.html)
  - [Scneems on Testing](https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#testing)

## Consider

- Document design decisions in the README
- Host on Heroku
  - DB: ephemeral vs AWS S3
