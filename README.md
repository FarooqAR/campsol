# campsol
https://farooqar.github.io/campsol

Contribution Guidelines:
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
Replace `page_name` with link to your newly created page

  ```html
  <ul class="nav" id="side-menu">
      //...
      <li data-load="pages/page_name">
          <a href="#" class="active">Page name</a>
      </li>
  </ul>
  ```
