var defaultOp = {
  'key': window.YOUTUBE_API_KEY,
  'max': 5,
  'query': 'Blues'
};

var defaultCB = function (data) {
  // Not sure
};

var searchYouTube = function (options = defaultOp, callback, errorCB = null) {
  // options will be based on user search input
  // TODO
  // declare the server
  $.ajax(
    {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      data: {
        'key': options.key,
        'maxResults': options.max,
        'part': 'snippet',
        'q': options.query,
        'type': 'video'
      },
      contentType: 'application/json',
      success: function (data) {
        return callback(data.items);
      },
      error: errorCB || function(error) {
        console.error('SearchYoutube: Failed to fetch messages', error);
      }
    }
  );

};

window.searchYouTube = searchYouTube;