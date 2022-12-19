# Benjamin Banneker

<a href="https://ericjonesdev.github.io/rock-paper-scissors/">Visit the live webpage</a>


<img src="assets/images/amIresponsive.png">

# 1. Project Overview

Paper, Rock, and Scissor is an interactive web app centered on allowing the user to pass the time playing a fun game. The look, feel, and functionality will be explained in the following sections:
## 1.1 Project Objective

The project objective was to create an interactive and visually appealing web app, catering to those who enjoy video games, as well as games of chance. 

## 1.2 User Stories


### First time users

- As a first time user I want an excellent visual experience
- As a first time user I want to quickly understand what the site is about. 
- As a first time user I want to easily interact with website content.
- As a first time user I want to understand how the game is played.
- As a first time user I want to easily distingish this site as a trusted site which is safe to use. 

### Returning users

- As a returning user I would like to see regular game updates.
- As a returning user I would like to have a history of my gaming score.

### Site Owner

- As a site owner I want to provide a fun and interactive gaming experience.
- As a site owner I want to have my site visually stand out.

## 1.3 Design


To serve as a gaming website, a simplistic but functional design was needed. This combination served two primary purposes. The first purpose, simplicity, was used to maintaine a pleasant look and asthetic to cater to younger users, while having content structures that would appeal to users of varying age groups.

Where applicable, accessibility and useability regarding color schematics, semantic markup, and overall structure where adhered to. 

<img src="assets/images/Linear gradient 1.png">

A root CSS statement was used to place color-contrasting colors on the body background.
Using further CSS statements:

<img src="assets/images/Linear gradient 2.png">

A pleasantly-colored and visually appealing background is serviced to the end-user. 

This site uses the 60&, 30%, and 10% rule, in reference to site color, meaning 60% of the site color is the linear gradient, 30% is the yellow & neon highlights, and 10% is the white text color.

<img src="assets/images/ColorSpace - Color Palettes Generator and Color Gradient Tool.png">
 
To accomodate for the variying viewport types, media queries were employed for overall responsiveness across platforms. 

# 2. Features

The website is a single stand-alone page which gives the user the ability to play the well-known Paper, Rock, and Scissors game.
## 2.1 Header Area
The website was organized into four main sections, those being the header, choices area, main game section, and the footer. 

The header section was used to notify the end-user exactly what game this website features.

<img src="assets/images/HeaderArea.png">

## 2.2 Game Choices Area

The game choices area gives the user the opportunity to choose between paper, rock, scissors, and to reset the game if desired.

As the game progresses, to the right of the reset button there is an area that dynamically tells the user who won the current game.

<img src="assets/images/ChoicesArea.png">


## 2.3 Score Count & Images Area

The game score section has the following functionalies:<br>
  1. Upon the user making a choice, the image changes to reflect this choice.
  2. The game winer score count tally is incremented by 1 for every successful game won. A draw will result in no incrementation of user or computer score.

<img src="assets/images/DynamicImagesArea.png">

## Footer Section

The footer section contains the game rules with which the user can use to play the game. The information is centered and right below the score and images area.

<img src="assets/images/FooterArea.png">

## 2.6 Features to Implement

When there is time, I would like to add a player high score area, so that returning users are able to see their placement within all users who may have played the game on this website. 

# 3. Testing

## 3.1 HTML Validation 

All documents were validated using the free W3C Markup validation service. A majority of initial errors received pertained to Font Awsome element duplicate statements, received due to styling and re-styling elements and code clean-up errors. 

Chrome development tools, as well as Firefox development tools where used to view each page and page behavior for functionality.

### Home Page
<img src="assets/images/Index_html - Nu Html Checker.png">

### About Us Page

<img src="assets/images/About us_html - Nu Html Checker.png">

### Contact Us Page

<img src="assets/images/Contact_html - Nu Html Checker.png">

## 3.2 CSS Validation

To validate the site CSS, the site CSS file was uploaded to the W3C Jigsaw validation service. The first attempt indicated a CSS rule which should have been omitted if not in use. This was corrected to have the second submittal be a success.

<img src="assets/images/W3C CSS Validator results for https___ericjonesdev.github.io_benjamin-banneker-history_index.html (C.png">

## Acessibility Validation Service

The Wave web accessibility evaluation tool was used to ensure that the site passed the industry-standard accessibility criteria. The majority of initial errors  revolved around non-optimal use of color contrast within the site navbar. The corrective action was to increase the navbar text font size to above 18px, as contrast standards are not as stringent, when taking bigger font into account. 

<img src="assets/images/WAVE Report of Benjamin Bannaker_ Multi-genius.png">

## 3.4 Lighthouse 

The Lighthouse performance app was used to test the website performance.
<hr>

<img src="assets/images/PageSpeed Insights.png">

## 3.5 Manual Testing User Stories

|       User Story                                                                                             |                       Testing                                                                                                                             |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| As a first time user I want an excellent visual experience                                         | Scrolling the home page will illustrate to the user that thought and care was taken in the design.                                                 |
| As a first time user I want to quickly understand what the site is about.                          | Clicking on the About Us page will inform the user as to the nature of this site.                                                                  |
| As a first time user I want to also have video and interactive content.                            | Either clicking on the video link in the navbar or scrolling down will show the user the video content.                                            |
| As a first time user I want the ability to easily navigate the site.                               | Clicking on the navbar links will take the user to internal as well as external page links.                                                        |
| As a first time user I want to easily distingish this site as a trusted site which is safe to use. | Using the W3School verification code, easily seen on the website will foster trust with the user.                                                  |
| As a site owner I want to provide an intuitive learning experience.                                | Proving an easy to use layout with clearn markup will allow the user a seamless learning experience.                                               |
| As a site owner I want to funnel traffic to my subscription list.                                  | Using a referral link within the about us page text, pointing to the sign-up form will funnel the necessary traffic towards the subscription list. |
| As a site owner I want to provide a way for users to contact me.                                   | The contact us page will be the medium through which site users can contact our team.                                                              |

## 3.6 Bugs and Fixes

Some bugs that were discovered and corrected throughout the development:
 | Bug                                                                                                                  | Fix                                                                                                |
 | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
 | Youtube embedded video thumbnail was not showing up on the live site                                                      | This was caused by an incorrect url schema, which included the original ommission of the http:// heading |
 | Legendary section headers and paragraph were not centering given the original coding format(s) on smaller viewport sizes. | The temporary fix was to introduce some padding statements that pushed the text to the desired location  |
 | About us page was originally not displaying any paragraph or other element text                                                                                                                          |  Caused by the wrong width and height statements on the containing div. The correct settings were implemented to correct this.                                                                                                        |

# 4. Deployment
This website was developed using an online version of VS code, via the gitpod/github applications and repositories. The following steps were taken:

    1. Navigate to the Benjamin Banneker githup repository
    2. Select the settings tab
    3. Select Pages within the left navigation payne
    4. Select the deploy from branch (main branch) under source
    5. Upon succesful completion of the app and refresh of page the link is displayed


   You may view the Github repository by clicking <a href="https://github.com/ericjonesdev/benjamin-banneker-history">here</a>.

   # 5. Credits
   ## 5.1 Video Section Information
   The following tutorial and associated repository link was used to refrence the code necessary to render the look, positioning and responsiveness of the iframe element:

Title - How To Make iframe's Responsive
https://youtu.be/X4t0JxiBeO0

Eventually learning that my code did not have to be as elaborate as the example, the lazy load method was called within the iframe to circumvent bad page load times.

Using a lazy load method for the iframe enabled a faster page load time according to the <a href="https://pagespeed.web.de">PageSpeed</a> performance checker. 

The navbar was styled for responsiveness according to this reference and with original edits:

Title - Create a responsive navigation nav with no JS! by Kevin Powell
https://youtu.be/8QKOaTYvYUA

## 5.2 Flexbox Tutorial

The following tutorial(s) were used as a reference to position and display elements using flexbox:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 5.3 Historial References

The following references were used for the body of webpage historical writing and main image:

Wikipedia. (2022) Benjamin Banneker. Retrieved 26.11.2022 from the online database, https://en.wikipedia.org/wiki/Benjamin_Banneker

Whitehousehistory.org. (2022)Benjamin Banneker: The Black Tobacco Farmer Who The Presidents Couldn't Ignore. Retrieved 26.11.2022 from the online database, https://www.whitehousehistory.org/benjamin-banneker

NPS.gov. (2022)Benjamin Banneker and the Boundary Stones of the District of Columbia. Retrieved 26.11.2022 from the online database, https://www.nps.gov/places/sw-9-intermediate-boundary-stone-of-the-district-of-columbia.htm/index.htm

Image copyright:
This media file is in the public domain in the United States. This applies to U.S. works where the copyright has expired, often because its first publication occurred prior to January 1, 1927, and if not then due to lack of notice or renewal. See this page for further explanation.
https://en.wikipedia.org/wiki/File:Benjamin_Banneker_Portrait.jpg

## 5.4 Media

The media used in this website:

- Benjamin Banneker Photo (In public domain)
- Social Media Icons created by <a href="https://fontawesome.com/">FontAwesome</a>
- Video in <a href="https://ericjonesdev.github.io/benjamin-banneker-history/index.html#video">Video</a> section: Created by <a href="https://www.youtube.com/watch?v=DKnwyVR4P88">Ted-Ed</a>