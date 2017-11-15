# Illinois State Board of Investments

## WP-Admin
- Login to the admin at isbinvestment.com/wp-admin and use the credentials provided

## CSS
### Master
- There is one master CSS file for the entire site ```custom.css```
- In the admin, navigate to ```Qode Options``` then click ```General``` then ```Custom Code```
- Copy the CSS from the file and paste it into the text area on the site where it says ```Custom CSS```
### Page-Specific
- Each page that has custom CSS has it's own CSS file. 
- Within a page, copy the CSS from the CSS file and paste it into the ```CSS``` box on the page builder

## JS

### Master 
- Like with CSS, there is one master JS file for the entire site ```custom.js```
- In the admin, navigate to ```Qode Options``` then click ```General``` then ```Custom Code```
- Copy the JS from the file and paste it into the text area on the site where it says ```Custom JS``` 
### Charts
- There is a seperate script to handle the complex chart on the ```/potfolio``` page titled ```charts-*-*.js```
- Make your changes to this file, update the version number
  - ```charts-2-26.js``` becomes ```charts-2-27.js```.
- Then, upload this file into the media library of the admin. 
- Navigate to ```settings``` then ```Insert Headers and Footers```
- Change the footer script url to the latest version that you just uploaded. 