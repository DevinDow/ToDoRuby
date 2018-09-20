# Issues

# TODO
- Owners
  - Create List adds to Owner
    - user.lists.create()
      - ex. user.active_relationships.create(followed_id: other_user.id)
  - Share adds to Owner
  - Delete only removes from Owners if there are other owners
  - protect other Lists & their Tasks
- Host on heroku
- Users
  - password reset?
- Views
  - editable **Task** with "+" button to update or update on-the-fly with textChanged?
  - single-page app?
    - */lists* is not important
      - name should be link to show
  - */lists/id/edit*
    - offers delete
      - Destroy should require List is emptied first
      - only destroy List when last Owner, otherwise just unshare
    - offers share
      - list users?  or send email?
    - change List Name updates Owner when more than one Owner, or Name propogated to Owner?
- AJAX
  - use [AJAX](https://docs.google.com/document/d/1wDGbrMNZcC9fNPRmIvftnUF0gO9Ref1QsbdODm0KF-Y/edit#) for modifying/adding a Task
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
- Tests
  - https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#testing
  - https://guides.rubyonrails.org/testing.html

### Sharing
- use email address?

## Consider
- Document design decisions in the README
- Cucumber/Rspec
- Host on Heroku
  - DB: ephemeral vs AWS S3

## Improvements
- https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#boilerplate-bootstrap-layout
- https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#add-the-flash
- https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#sidebar
