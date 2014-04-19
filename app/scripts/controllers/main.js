'use strict';

var songs = [{title: "some title", editing: false},
    {title: "another title", editing: false}];

var playlists = [
    {title: "playlist title",
        songs: [{title: "some title", editing: false},
            {title: "another title", editing: false}],
        editing: false
    }
];

angular.module('playyylistApp')
    .controller('PlaylistCtrl', function ($scope, $http) {

        "use strict";

        $scope.resetNewSong = function() {
            $scope.newSong = $scope.newSong || {};
            $scope.newSong.title = "";
            $scope.newSong.editing = false;
        };

        $scope.resetNewPlaylist = function() {
            $scope.newPlaylist = {};
            $scope.newPlaylist.title = null;
            $scope.newPlaylist.songs = [{title: "some title"}];
        };

        $scope.songs = [];
        $scope.playlists = [];
        $scope.resetNewSong();
        $scope.resetNewPlaylist();


        $scope.addSong = function(playlist) {
            // check if song exists
            // if not, add song
            var songTitleToInsert = $scope.newSong.title.trim();
            playlist.songs.push({title: songTitleToInsert});
            $scope.resetNewSong($scope);
        };

        $scope.addPlaylist = function() {
            // check if song exists
            // if not, add song
            var playlistTitleToInsert = $scope.newPlaylist.title.trim();
            $scope.playlists.push({title: playlistTitleToInsert, songs: []});
            $scope.resetNewPlaylist();
        };

        $scope.removePlaylist = function(playlist) {
            var index = $scope.playlists.indexOf(playlist);
            $scope.playlists.splice(index, 1);
        };

        $scope.removeSong = function(songs, song) {
            var index = songs.indexOf(song);
            songs.splice(index, 1);
        };

        $scope.editSongOrPlaylist = function(songOrPlaylist) {
            songOrPlaylist.editing = true;
        };

        $scope.doneEditing = function(songOrPlaylist) {
            songOrPlaylist.editing = false;
        };

    });
