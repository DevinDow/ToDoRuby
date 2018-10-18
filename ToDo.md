# ToDo

## Vue & React

- add **EditList** Component with *Delete* button

## React

- default button
- focused <input>

## Issues

- Test not finding "SHARED WITH" in Vue & React Components.  Do I need a Test Framework that gets the results of React Components?
  - https://vue-test-utils.vuejs.org/guides/

## TODO

- Sort Lists
  - if **List's name** only comes from **Owner** table then can easily sort in *user.rb*: 
    - `has_many :owners, dependent: :destroy, -> { order(:my_list_name)}`
    - `lists#create()` needs to set name when creating owner
    - edit **List** will need to join **Owner** table?
- **Owners**
  - Share adds to **Owner**
    - list users?  or send email?
  - Delete **List** removes from **Owner**
    - if there are no other **Owners** then destroy **List**
    - protect non-owner **Lists** & their **Tasks**
  - change **List Name** updates **Owner** when more than one **Owner**, or **Name** propogated to **Owner**, or **Name** only stored in **Owner**?
- **Users**
  - **Password** reset?
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
  - button on **List** to delete all **Tasks** that are done
  - Export to Text

## Consider

- **Heroku**
  - **DB:** ephemeral vs AWS S3
