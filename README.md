# campsol
https://farooqar.github.io/campsol

Contribution Guidelines:
* Never merge your branch with `master` or `gh-pages` unless you know the consequences!.
* Always pull before working. 

  `git pull origin master`
* If you create a new file in Webstorm, It asks you to add that file in git. Never add that file to git unless you've done working on that file
* If you create a new HTML file in Webstorm, It provides you a starter template.If you're in `pages` folder, remove the template and add this:

  ```html
  <div class="row">
      <div class="col-lg-12">
          <h1 class="page-header">Page Heading</h1>
      </div>
  </div>

  <!-- ... Your content goes here ... -->

  ```
* To add a link to the above page, Add the list item with link in `ul#side-menu`. You'll find this menu at the bottom of `index.html`.
  For example, if you want to add link to `pages/students/attendance.html`, then do something like this:
  (`#students-attendance` will be converted to `pages/students/attendance.html`. therefore spelling is important)

  ```html
  <ul class="nav" id="side-menu">
      //...
      <li>
          <a href="#students-attendance" class="active">Page name</a>
      </li>
  </ul>
  ```
