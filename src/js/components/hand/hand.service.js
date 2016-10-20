(function() {
  'use strict';

  angular.module('CardDrawApp.components.hand')
    .service('HandService', HandService)

  HandService.$inject = ['$http']

  const baseUrl = 'https://deckofcardsapi.com/api/deck'
  const newDeckPath = '/new/shuffle/?deck_count=1'
  const getAllPath = (id) => `/${id}/draw/?count=52`

  function HandService($http) {

    this.draw = function() {
      $http.get(baseUrl + newDeckPath)
      .then((deckInfo) => {
        var id = deckInfo.data.deck_id
        return $http.get(baseUrl + getAllPath(id))
      }).then((cardInfo) => {
        var cards = cardInfo.data.cards
        console.log(cards);
      })
    };

      // make another request to get all the cards back
  }

}());
