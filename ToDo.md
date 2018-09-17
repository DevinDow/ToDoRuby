# Issues

# TODO
- [Add Users](https://www.railstutorial.org/book/modeling_users)
  - (https://edgeguides.rubyonrails.org/getting_started.html#basic-authentication)
  - Shared **Lists** requires a **User_List** DB Table instead of **List** *belongs_to: User*
    - should **User_List** have a custom **Name** or **Order** for the **List**? (ex *"1-Priorities"* vs *"1"* & *"Priorities"*)
- Tests
  - https://github.com/schneems/reddit_on_rails/blob/master/part_three.md#testing
  - https://guides.rubyonrails.org/testing.html
- Views
  - editable **Task** with "+" button to update or update on-the-fly with textChanged?
  - */lists* is not important
    - name should be link to show
  - */lists/id/edit* offers delete
    - Destroy should require List is emptied first
- AJAX
  - use [AJAX](https://docs.google.com/document/d/1wDGbrMNZcC9fNPRmIvftnUF0gO9Ref1QsbdODm0KF-Y/edit#) for modifying/adding a Task
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**

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
