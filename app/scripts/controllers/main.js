'use strict';

angular.module('playyylistApp')
    .controller('PlaylistCtrl', function ($scope, $http) {

        "use strict";

        $scope.resetNewSong = function(playlist) {
            playlist.newSong = {};
            playlist.newSong.title = "";
            playlist.newSong.editing = false;
        };

        $scope.resetNewPlaylist = function(title) {
            $scope.newPlaylist = {};
            $scope.newPlaylist.title = title || '';
            $scope.newPlaylist.songs = [];
            $scope.resetNewSong($scope.newPlaylist);
            return $scope.newPlaylist;
        };

        $scope.songs = [];
        $scope.playlists = [];
        $scope.resetNewPlaylist();

        $scope.validateSong = function(song, playlist) {
            playlist.error = null;
            if (([song.title,song.album,song.artist].indexOf(undefined) != -1) ||
                ([song.title,song.album,song.artist].indexOf("") != -1)) {
                playlist.error = "you must enter a song title, album, and artist";
            }
        };

        $scope.addSong = function(playlist) {
            $scope.validateSong(playlist.newSong, playlist);
            if (playlist.error == null) {
                playlist.songs.push(playlist.newSong);
                $scope.resetNewSong(playlist);
            }
        };

        $scope.addPlaylist = function() {
            var playlistTitleToInsert = $scope.newPlaylist.title.trim();
            var newPlaylist = $scope.resetNewPlaylist(playlistTitleToInsert);
            $scope.playlists.push(newPlaylist);
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
