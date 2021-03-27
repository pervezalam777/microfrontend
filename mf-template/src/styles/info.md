# Style SCSS
Each micro-frontend may or may not have its on style but it good to have one (just an opinion).

## Naming convention
Having a file naming convention in your application makes in more maintainable. As there are various types of naming convention available (e.g. kebab-case, snake_case, lowerCamelCase, UpperCamelCase). in this repo i have chosen `lowerCamelCase`. (Observation: I have seen some issues with other casing with sonar specially for code files.) 
- Entry file name should start with `style(mf-name)` (e.g. styleDashboard)
- should follow `7-1 pattern` (just an opinion)
- should have `_appLayout.scss` to define layout of your micro frontend


# References 
[7-1 pattern](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture)
```sh
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _mixins.scss       # Sass Mixins
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules  
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|
 – main.scss              # Main Sass input file
```