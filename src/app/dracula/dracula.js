/**
 * Created by jenwest on 11/9/2015.
 */
angular.module( 'ngBoilerplate.about', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'dracula', {
      url: '/dracula',
      views: {
        "main": {
          controller: 'DraculaCtrl',
          templateUrl: 'dracula/dracula.tpl.html'
        }
      },
      data:{ pageTitle: 'Have you seen Dracula?' }
    });
  })

  .controller( 'DraculaCtrl', function DraculaCtrl( $scope ) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choice!",
      "And another choice for you.",
      "but wait! A third!"
    ];
  })

;
