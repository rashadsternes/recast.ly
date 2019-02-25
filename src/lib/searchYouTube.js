var searchYouTube = function (options, successCB, errorCB = null) {
  // Feed The Youtube API specific headers to later run a success callback and get data
  $.ajax(
    {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      data: {
        'key': options.key || window.YOUTUBE_API_KEY,
        'maxResults': options.max || 5,
        'part': 'snippet',
        'q': options.query,
        'type': 'video'
      },
      contentType: 'application/json',
      success: function (data) {
        successCB(data.items);
      },
      error: errorCB || function(error) {
        console.error('SearchYoutube: Failed to fetch messages', error);
      }
    }
  );

};

window.searchYouTube = searchYouTube;